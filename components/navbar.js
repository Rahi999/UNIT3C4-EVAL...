function navbar() {
    return `<input type="text" placeholder="Search News" id="search_input"> 
      <button id="enter">Enter</button>

    <a href="index.html">Home</a>`
}


  function top() {
      return `<div id="sidebar">
      <div id="in">India</div>
      <div id="ch">China</div>
      <div id="us">USA</div>
      <div id="uk">UK</div>
      <div id="nz">New zeland</div>
    </div>

    <div id="results"></div>`
  }


export {navbar, top}