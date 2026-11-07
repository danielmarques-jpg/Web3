usuarios = []

email = input("Digite seu email: ")
senha = input("Digite sua senha: ")

if email == "" or senha == "":
    print("Preencha todos os campos")

else:
    for usuario in usuarios:

        if usuario["email"] == email and usuario["senha"] == senha:
            print("Login realizado com sucesso")
            break

    else:
        print("E-mail ou senha inválidos")
