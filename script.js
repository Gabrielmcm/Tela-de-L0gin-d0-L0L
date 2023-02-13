const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const handleFocus = ({ target }) => { /* as {} dentro das () desestruturam o target o deixando "off" */
    const span = target.previousElementSibling; /* esta função "previousElementSibling" puxa um evento anterior do target que neste caso é o input e o irmão é o span */
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {

    if (target.value == '') { /* caso não tenha algum conteúdo dentro do input (que é o "target"), a ação da class span será removida e o foco do input ficará alinhado e bonitinho*/
    const span = target.previousElementSibling; 
    span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [username, password] = inputs;
  
    if (username.value && password.value.length >= 8) { /* estou pegando os valores com "value" para fazer uma condição e o "length" significa "pelo menos" */
      button.removeAttribute('disabled'); /* ou seja, se minha condição for VERDADEIRA, ele irá habilitar a cor ao meu botão e assim confirmando que minha senha tem no mínimo 8 dígitos conforme foi pedido pela minha condição */
    } else {
      button.setAttribute('disabled', ''); /* caso seja falso, o botão não irá mudar de cor */
    }
  }

inputs.forEach((input) => input.addEventListener('focus', handleFocus)); /* "forEach" = para cada elemento dento da ray (que neste caso é o "input") ele executará uma ação que neste caso em específico é focar */
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut)); /* E neste caso de "focusout" ele irá desfocar a ação e fazer com que ela volte ao estado padrão */ 
inputs.forEach((input) => input.addEventListener('input', handleChange)); /* sempre que eu mexer no meu input, esta função alterará o que eu pedir */


