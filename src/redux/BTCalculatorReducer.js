let stateStore = {
  content: 0,
  prev: "",
  oparation: "",
};

const BTCalculatorReducer = (state = stateStore, action) => {
  let content = state.content;
  let prev = state.prev;
  let oparation = state.oparation;
  switch (action.type) {
    case "HANDLER": {
      let newState;
      let index = content.length - 1;

      switch (action.kytu) {
        case "CE": {
          content = content.toString().slice(0, index);
          break;
        }
        case "C": {
          content = 0;
          oparation = "";
          prev = "";
          break;
        }
        case "+":
        case "-":
        case "*":
        case "/": {
          oparation = action.kytu;
          if (content === "") {
            break;
          }
          if (prev !== "") {
            let total;
            let prevNumber = parseFloat(prev);
            let contentNumber = parseFloat(content);
            if (isNaN(prevNumber) || isNaN(contentNumber)) break;
            switch (oparation) {
              case "+": {
                total = prevNumber + contentNumber;
                break;
              }
              case "-": {
                total = prevNumber - contentNumber;
                break;
              }
              case "*": {
                total = prevNumber * contentNumber;
                break;
              }
              case "/": {
                total = prevNumber / contentNumber;
                break;
              }
              default: {
                break;
              }
            }
            content = total;
            oparation = "";
            prev = "";
          }
          oparation = action.kytu;
          prev = content;
          content = "";
          break;
        }
        case "=": {
          let total;
          let prevNumber = parseFloat(prev);
          let contentNumber = parseFloat(content);
          if (isNaN(prevNumber) || isNaN(contentNumber)) break;
          switch (oparation) {
            case "+": {
              total = prevNumber + contentNumber;
              break;
            }
            case "-": {
              total = prevNumber - contentNumber;
              break;
            }
            case "*": {
              total = prevNumber * contentNumber;
              break;
            }
            case "/": {
              total = prevNumber / contentNumber;
              break;
            }
            default: {
              break;
            }
          }
          content = total;
          oparation = "";
          prev = "";
          break;
        }
        default: {
          // if (
          //   (kyTuDB.includes(action.kytu) && content === "") ||
          //   (kyTuDB.includes(action.kytu) && kyTuDB.includes(content.slice(-1)))
          // ) {
          //   break;
          // }
          if (action.kytu === "." && content.toString().includes(".")) break;
          if (Number.isInteger(content)) {
            content = "";
          }
          content += action.kytu;
          break;
        }
      }
      newState = { content, prev, oparation };
      console.log(newState);
      return newState;
    }
    default: {
      return { ...state };
    }
  }
};

export default BTCalculatorReducer;
