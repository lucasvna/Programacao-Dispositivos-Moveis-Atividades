# Tela de Login (React Native / Expo)
Este é um componente simples de tela de login desenvolvido com **React Native** e **Expo**. Ele apresenta um formulário de login padrão (email e senha) e opções de login social via Github e Google, embora a lógica de autenticação em si esteja pendente.

## 🚀 Funcionalidades
* **Formulário de Credenciais**: Campos para inserir e gerenciar o estado de Email e Senha.

* **Botão de Acesso**: Botão principal "Entrar".

* **Login Social**: Botões estilizados para login com Github e Google.

* **Design Responsivo**: Layout centralizado e ajustável com o StyleSheet do React Native.

* **Estado Local**: Uso do hook useState para gerenciar as entradas do usuário.

## 🛠️ Tecnologias Utilizadas
* **React Native**

* **Expo**

## Pré-requisitos
Para rodar este projeto, você precisará ter o Node.js e o npm (ou yarn/pnpm) instalados, além do **Expo CLI**.

* Node.js

* Expo CLI (Instalação global: ```npm install -g expo-cli```)

## Instalação e Configuração
Siga os passos abaixo para configurar e executar a aplicação:

1. **Clone o repositório**:

```
git clone [URL_DO_REPOSITORIO]
cd [pasta_do_projeto]
```
2. **Instale as dependências**:

```npm install```

3. **Execute o projeto com Expo**:

```expo start```

## 🏃 Como Rodar
Após executar ```expo start```, o Expo CLI iniciará um servidor de desenvolvimento. Você pode interagir com o aplicativo das seguintes maneiras:

1. **No Emulador/Simulador**: Pressione ```a``` para Android ou ```i``` para iOS no terminal.

2. **No seu celular (Recomendado)**: Baixe o aplicativo Expo Go (disponível na App Store ou Google Play) e escaneie o código QR exibido no terminal ou na página do navegador.

## 🖼️ Capturas de Tela
Aqui você pode adicionar capturas de tela da aplicação para que outros desenvolvedores e usuários possam visualizar a interface da tela de Login.

**Tela de Login**
![Sem título](https://github.com/user-attachments/assets/a69efa2e-9b7b-4364-bcd0-4771e3a56f7c)


## 📁 Estrutura do Código
O código é composto por dois arquivos principais:

```App.js```: O ponto de entrada da aplicação, que renderiza o componente principal ```LoginScreen.jsx```.

```import LoginScreen from './src/screens/LoginScreen'
// ...
const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LoginScreen/>
    </View>
  )
}
```

```src/screens/LoginScreen.jsx```: Contém a lógica de estado (```email```, ```senha```) e a interface da tela de login, incluindo os estilos.

```// Gerencia os estados de input
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")

// Componente de UI e Estilos
// ...
```


