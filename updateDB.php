<?php
require_once('/home/roogewor/liana-config.php');

$email = $_GET["email"];

try {
    $sql = "INSERT INTO newsletter_sub(email) VALUES ('$email')";
    $conn->exec($sql);
    echo "New record created successfully";
} catch (PDOException $pdoex) {
    print "<p>Error saving to database" . $pdoex->getMessage() . "</p>";
}

?>