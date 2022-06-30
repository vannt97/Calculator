import React, { Component } from "react";
import { connect } from "react-redux";
import "./BTCalculator.css";
class BTCalculator extends Component {
  active = (e) => {
    let btn = e.target;
    document.querySelectorAll("button").forEach((item) => {
      item.classList.remove("active");
    });
    btn.classList.add("active");
  };

  mangKyTu = [
    {
      kytu: 7,
    },
    {
      kytu: 8,
    },
    {
      kytu: 9,
    },
    {
      kytu: "/",
    },
    {
      kytu: "CE",
    },
    {
      kytu: 4,
    },
    {
      kytu: 5,
    },
    {
      kytu: 6,
    },
    {
      kytu: "*",
    },
    {
      kytu: "C",
    },
    {
      kytu: 1,
    },
    {
      kytu: 2,
    },
    {
      kytu: 3,
    },
    {
      kytu: "-",
    },
    {
      kytu: "=",
    },
    {
      kytu: 0,
    },
    {
      kytu: ".",
    },
    {
      kytu: "+",
    },
  ];
  renderKyTu = () => {
    return this.mangKyTu.map((item, index) => {
      return (
        <button
          key={index}
          className={"item-" + index}
          onClick={(e) => {
            this.active(e);
            this.props.handlerContent(item.kytu);
          }}
        >
          {item.kytu}
        </button>
      );
    });
  };
  convertNumber = (string) => {
    let floatNumber = parseFloat(string);
    if (isNaN(floatNumber)) return "";
    return floatNumber.toLocaleString("en");
  };
  render() {
    return (
      <div className="calculator">
        <div className="calculator_content">
          <div className="calculator_display ">
            <p style={{ margin: "0", height: "20px" }}>
              {this.props.prev}
              {this.props.oparation}
            </p>
            <p style={{ margin: "0", height: "20px" }}>
              {this.convertNumber(this.props.content)}
            </p>
          </div>
          {this.renderKyTu()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerContent: (kytu) => {
      let action = {
        type: "HANDLER",
        kytu,
      };

      dispatch(action);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    content: state.BTCalculatorReducer.content,
    prev: state.BTCalculatorReducer.prev,
    oparation: state.BTCalculatorReducer.oparation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BTCalculator);
