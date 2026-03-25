
<head>
  <meta charset="utf-8" />
  <title>App Help Desk</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <link rel="icon" href="imagens/logo.png" type="image/x-icon">

  <style>
    .card-login {
      padding: 30px 0 0 0;
      width: 350px;
      margin: 0 auto;
    }
  </style>
</head>

<body>

  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="../app_help_desk_bd/imagens/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      App Help Desk
    </a>
  </nav>

  <div class="container">
    <div class="row">

      <div class="card-login">
        <div class="card">
          <div class="card-header">
            cadastre-se
          </div>

          <div class="card-body">
            <form action="cadastro.php" method="GET">

              <div class="form-group">
                <img src="imagens/user.png" style="padding-bottom: 15px; width: 200px; margin-left:50px;" alt="Ícone 
                de usuário">
              </div>

              <div class="form-group mb-3">
                <input name="nome" type="text" class="form-control" placeholder="nome" required autofocus>
              </div>

              <div class="form-group mb-3">
                <input name="email" type="email" class="form-control" placeholder="E-mail" required autofocus>
              </div>

              <div class="form-group mb-3">
                <input name="senha" type="password" class="form-control" placeholder="Senha" required>
              </div>
              <div class="form-group mb-3">
                <select name="perfil" class="form-control" required>
                  <option value="">-- Selecione --</option>
                  <option value="usuario">Usuário</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>

          </div>
        </div>

        <?php
        ?>

          <button class="btn btn-lg btn-info btn-block"   type="submit">cadastrar</button>
          </form>
      </div>
    </div>
  </div>
  </div>
</body>

</html>