<html>

<head>
    <meta charset="utf-8">
    <title>Login - Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    <link rel="stylesheet" href="app_help_desk/style.css">
</head>

<body>

    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">app help desk</a>
    </nav>

    <div class="container mt-5">

        <h3>login</h3>

        <form action="valid_login.php" method="GET">

            <div class="form-group">
                <label>email</label>
                <input type="email" name="email" class="form-control" placeholder="Email" required>
            </div>
              <div class="form-group">
                <label>senha</label>
                <input type="password" name="senha" class="form-control" placeholder="Senha" required>
            </div>
            <?php if (isset($_GET['login']) && $_GET['login'] == 'erro2')  
               { ?> 
               <div class="text-danger">
                voce precisa fazer login
               </div>
            <?php } ?>

            <button type="submit" class="btn btn-primary btn-block">
                entrar
            </button>
        </form>    
    </div>

    </body>

    </html>
        
    