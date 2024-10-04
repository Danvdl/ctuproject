<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Anro Pace" />
    <meta name="contact" content="20241238@ctucareer.co.za" />
    <meta name="keywords" content="CTU, City Technical University, Enducation, Learning, Home Page" />
    <meta http-equiv="refresh" content="3600" />

    <title>CTU-Buddy: Interactive Education Website - Home Page</title>

    <!-- Link-  -->
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" type="image/x-icon" href="Resources/icon.ico">
  </head>
  <body>
    <!-- Top navigation Bar -->
    <div id="top-nav">
      <!-- Logo -->
      <img class="logo" src="CTU Buddy logo.png" width="150px" height="120px" alt="logo"/>
      <!-- Links -->
      <nav>
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="timetable.html">Timetable</a></li>
          <li><a href="discussion.html">Discussion</a></li>
          <li><a href="share.html">Share</a></li>
          <li><a href="resources.html">Resources</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </nav>
    </div>
    <!-- Resource Page -->
    <!-- Videos, Study guide, books, slides -->
    <div class="content">
    <div id="resource">
      <div class="heading">
        <h1>Welcome to the Resource Page</h1>
        <p>
          Here you will find all of our resources such as videos, study guides
          and books for different subjects that we offer.
        </p>
      </div>
      <h1>Upload Document</h1>
      <form id="uploadForm" enctype="multipart/form-data" method="POST" action="/upload">
        <label for="fileInput">Select a file:</label>
        <input type="file" id="fileInput" name="document" required>
        <button type="submit">Upload</button>
      </form>

      <h1>Download Documents</h1>
      <ul id="fileList"></ul>

      <ul>
        <?php
        $dir = "uploads/";
        if (is_dir($dir)){
            if ($dh = opendir($dir)){
                while (($file = readdir($dh)) !== false){
                    if ($file != "." && $file != "..") {
                        echo "<li><a href='uploads/$file' download>$file</a></li>";
                    }
                }
                closedir($dh);
            }
        }
        ?>
    </ul>
    </div>
    <!-- Footer -->
    <footer>
      Copyright © JAFFLE & CTU-Buddy. Made with
      <i class="fa-solid fa-heart"></i> by CTU College Students.
    </footer>
  </body>
</html>
