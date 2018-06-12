import React, { Component } from "react";
import datas from "./datas.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      trie: false,
      search: "",
      series: datas
    };
    this.changerVisibile = this.changerVisibile.bind(this);
    this.trier = this.trier.bind(this);
    this.search = this.search.bind(this);
  }

  changerVisibile() {
    this.setState({
      visible: !this.state.visible
    });
    if (this.state.visible === true) {
      this.setState({
        series: this.state.series.slice(0, 2)
      });
    } else {
      this.setState({
        series: datas
      });
    }
  }

  trier() {
    this.setState({
      trie: !this.state.trie
    });
    if (this.state.trie === true) {
      const seriesChange = [...this.state.series].sort(
        (a, b) => a.title > b.title
      );
      console.log([...this.state.series]);
      this.setState({
        series: seriesChange
      });
    } else {
      const seriesChange = [...this.state.series].sort(
        (a, b) => b.title < a.title
      );
      console.log(seriesChange);
      this.setState({
        series: seriesChange
      });
    }
  }

  search(e) {
    this.setState({
      search: e.target.value
    });
    if (e.target.value.length < 3) {
      this.setState({
        series: datas
      });
    } else {
      const regex = new RegExp(e.target.value, "i");
      const tab = this.state.series.filter(elt => regex.test(elt.title));
      this.setState({
        series: tab
      });
    }
  }

  render() {
    return (
      <p>
        <input type="search" onChange={this.search} required />
        {this.state.visible && <h3>Je suis visible</h3>}
        <button onClick={this.changerVisibile}>Cliquer ici</button>
        <button onClick={this.trier}>Trier </button>
        To get started, edit <code>src/App.js</code> and save to reload.
        {this.state.series.map(serie => <p>{serie.title}</p>)}
      </p>
    );
  }
}

export default App;
