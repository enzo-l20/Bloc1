<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $num_rows = intval($_POST['num_rows']);
    $num_columns = intval($_POST['num_columns']);
    
    $merge_cells = isset($_POST['merge_cells']) ? $_POST['merge_cells'] : '';
    $merge_info = [];
    
    foreach (explode("\n", $merge_cells) as $line) {
        $line = trim($line);
        if ($line) {
            list($cell, $span) = explode(':', $line);
            $merge_info[$cell] = $span;
        }
    }

    $table_html = '<table border="1">';
    $merged = [];

    for ($i = 0; $i < $num_rows; $i++) {
        $table_html .= '<tr>';
        for ($j = 0; $j < $num_columns; $j++) {
            if (in_array(($i + 1) . '-' . ($j + 1), $merged)) {
                continue;
            }
            
            $cell_key = ($i + 1) . '-' . ($j + 1);
            if (isset($merge_info[$cell_key])) {
                list($row_span, $col_span) = explode('-', $merge_info[$cell_key]);
                
                $table_html .= '<td rowspan="' . $row_span . '" colspan="' . $col_span . '">Cellule ' . ($i + 1) . '-' . ($j + 1) . '</td>';
                
                for ($r = 0; $r < $row_span; $r++) {
                    for ($c = 0; $c < $col_span; $c++) {
                        if ($r === 0 && $c === 0) continue; 
                        $merged[] = ($i + 1 + $r) . '-' . ($j + 1 + $c);
                    }
                }
                $j += $col_span - 1; 
            } else {
                $table_html .= '<td>Cellule ' . ($i + 1) . '-' . ($j + 1) . '</td>';
            }
        }
        $table_html .= '</tr>';
    }
    $table_html .= '</table>';
}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Générateur de Tableau avec Fusion de Cellules</title>
</head>
<body>

<form method="POST">
    <label for="num_rows">Nombre de lignes :</label>
    <input type="number" id="num_rows" name="num_rows" min="1" max="30" required>
    
    <label for="num_columns">Nombre de colonnes :</label>
    <input type="number" id="num_columns" name="num_columns" min="1" max="30" required>

    <h3>Fusionner des cellules (format: ligne-colonne:hauteur-largeur, par ex. 1-1:2-2)</h3>
    <textarea name="merge_cells" rows="4" cols="50"></textarea>
    
    <button type="submit">Générer</button>
</form>

<?php if (isset($table_html)): ?>
    <h2>Tableau généré :</h2>
    <?php echo $table_html; ?>

    <h3>Code HTML du tableau :</h3>
    <textarea rows="30" cols="100"><?php echo htmlspecialchars($table_html); ?></textarea>
<?php endif; ?>

</body>
</html>