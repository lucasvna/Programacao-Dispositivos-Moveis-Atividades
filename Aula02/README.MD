# 📱 Exercícios React Native — Apresentação e Execução

Este documento apresenta de forma resumida os **exercícios práticos em React Native** desenvolvidos para treinar conceitos de **componentização, layout e interatividade**.  

---

## 🧩 **1. CartaoApresentacao**

**Descrição:**  
Exibe um cartão com foto de perfil, nome, descrição e dois botões (Github e Linkedin).  
O objetivo é treinar **estilos com StyleSheet** e o uso de **componentes de layout (`View`, `Text`, `Image`, `TouchableOpacity`)**.

**Principais conceitos:**
- Estilização com `StyleSheet.create`
- Uso de imagens externas via `uri`
- Criação de botões estilizados

📸 **Resultado:**  
![Cartão de Apresentação](https://github.com/user-attachments/assets/afd47ffb-104d-4d6b-b4f6-3520f9ecd214)

---

## 🧩 **2. CartaoPerfil**

**Descrição:**  
Exibe um cartão de perfil que mostra informações básicas (nome e ocupação) e, ao clicar no botão, revela detalhes adicionais (localização, e-mail e hobbies).  
O foco é a prática do **uso de estados (`useState`)** e **renderização condicional**.

**Principais conceitos:**
- Manipulação de estado com `useState`
- Renderização condicional com `&&`
- Interação com o usuário via `TouchableOpacity`

📸 **Resultado:**  
![Cartão de Perfil - Botão Ver Mais](https://github.com/user-attachments/assets/ce4f407e-1a0c-4e7c-b141-eb2035892901)

![Cartão de Perfil - Botão Ver Menos](https://github.com/user-attachments/assets/08685bb2-b573-4703-bca6-834196a9b143)
---

## 🧩 **3. LayoutResponsivo**

**Descrição:**  
Demonstra o uso de `Flexbox` para criar um layout com três áreas: **cabeçalho**, **conteúdo principal** e **rodapé**.  
Serve para praticar **proporções flexíveis** e **alinhamento responsivo**.

**Principais conceitos:**
- Uso de `flex` para distribuir espaço na tela
- Estruturação de layout vertical
- Centralização de elementos

📸 **Resultado:**  
![Layout Responsivo](https://github.com/user-attachments/assets/9005bdfb-f383-41ee-a83c-01c337ee4650)

---

## 🧩 **4. App.js**

**Descrição:**  
Arquivo principal do projeto. Pode ser usado para importar e exibir qualquer um dos componentes acima.  
Exemplo:
```javascript
import CartaoPerfil from './CartaoPerfil';
export default function App() {
  return <CartaoPerfil />;
}
