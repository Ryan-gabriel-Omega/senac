<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>App Help Desk - Cadastro</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="icon" href="imagens/logo.png" type="image/x-icon">
  <style>
    .card-login { padding: 30px 0 0 0; width: 350px; margin: 0 auto; }
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
        <div class="card-header">Cadastre-se</div>
        <div class="card-body">


          <?php if(isset($_GET['email'])) echo '<div class="alert alert-danger">Email já cadastrado!</div>'; ?>
          <?php if(isset($_GET['validaperfil'])) echo '<div class="alert alert-warning">Selecione um perfil válido!</div>'; ?>
          <?php if(isset($_GET['usuario']) && $_GET['usuario']=='falha') echo '<div class="alert alert-danger">Erro ao cadastrar usuário!</div>'; ?>

          <form action="valida_cadastro.php" method="POST">
            <div class="form-group text-center">
              <img src="imagens/user.png" style="width:200px;" alt="Ícone de usuário">
            </div>

            <div class="form-group mb-3">
              <input name="nome" type="text" class="form-control" placeholder="Nome" required autofocus>
            </div>

            <div class="form-group mb-3">
              <input name="email" type="email" class="form-control" placeholder="E-mail" required>
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

            <button class="btn btn-lg btn-info btn-block" type="submit">Cadastrar</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</div>

</body>
</html>