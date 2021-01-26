<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>View All Movie Reviews</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <script src="js/jquery-3.5.1.min.js"></script> 
        <script src="js/bootstrap.min.js"></script> 
        <script src="js/index.js"></script>
        <style>
            body{
                background-color: lightcyan;
            }
            .card-body{
                background-color: lightgreen;
            }
            .card-header{
                background-color: lightseagreen;
                font-weight: bold;
            }
            .card{
                width: 60%;
                margin: 0 auto; 
                float: none;
                margin-bottom: 10px;
            }
            .carousel-inner{
                width: 600px;
            }
            .carousel-item img{
                width: 593px;
                height: 342px;
            }
            .card-img-top{
                width: 100%;
            }
            #myCarousel{
                width: 600px;
                height: 350px;
                border: 4px solid green;
                margin: 0 auto;
                margin-top: 15px;
            }
            h1{
                text-align: center;
                font-size: 80px;
                font-family: 'Courier New', monospace;
            }
        </style>
    </head>
    <body>
        <?php include "navbar.php"; ?>

        <h1>Review the movies</h1>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/avengers.jpg">
                </div>
                <div class="carousel-item">
                    <img src="images/aladdin.jpg">
                </div>
                <div class="carousel-item">
                    <img src="images/starwars.jpg">
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>


        <div class="container">
            <br/>
            <div id="contents"></div>
        </div>
    </body>
</html>
