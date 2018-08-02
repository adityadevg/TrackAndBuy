import React, { Component } from 'react';

import './App.css';

//import React from 'react';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import theme from 'fusioncharts/themes/fusioncharts.theme.fint';

// Pass fusioncharts as a dependency of charts
charts(fusioncharts)
theme(fusioncharts)



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Loading....."
    };
  }

  componentDidMount(){
   
grabUsers("")
.then((data) => {
  var chartConfig= generateChartConfig(data,{
    "caption":"Best Stocks Today",
    "captionfontsize":"20",
    "theme":"fint",
   "logoURL":"https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png",
    "logoAlpha": "80",
    "logoScale": "8",
    "canvastopmargin":"75",
    
    "logoPosition": "TR",
    "logoleftmargin":"-20",
    "logotopmargin":"10",
    
    "yaxisminvalue":"12000000"
  },"column2d");
 ReactDOM.unmountComponentAtNode(document.getElementById('chart-viewer'));
  ReactDOM.render(<ReactFC {...chartConfig} />, document.getElementById('chart-viewer'));
  //ReactDOM.render(<radio/> , document.getElementById('radio'));
})
.catch((err) => {
  console.log(err);
  this.setState({
    msg: String(err)
  });
}); 



  }


setlang(event) {
    console.log(event.target.value);
    if(event.target.value==="java"){
      console.log("Hi I am on Java");


grabUsers("language:java")
.then((data) => {
  var chartConfig= generateChartConfig(data,{
    "caption":"Java Users - 2017",
    "captionfontsize":"20",
    "theme":"fint",
    "logoURL":"https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png",
    "logoAlpha": "80",
    "logoScale": "8",
    "canvastopmargin":"75",
    "logoPosition": "TR",
    "logoleftmargin":"-20",
    "logotopmargin":"10",
      "yaxisminvalue":"1000000"
  },"column2d");
 ReactDOM.unmountComponentAtNode(document.getElementById('chart-viewer'));
  ReactDOM.render(<ReactFC {...chartConfig} />, document.getElementById('chart-viewer'));
  //ReactDOM.render(<radio/> , document.getElementById('radio'));
})
.catch((err) => {
  console.log(err);
  this.setState({
    msg: String(err)
  });
}); 

    }
  else if (event.target.value==="C"){
 console.log("Hi I am on C");

grabUsers("language:C")
.then((data) => {
  var chartConfig= generateChartConfig(data,{
    "caption":"C Users - 2017",
    "captionfontsize":"20",
    "theme":"fint",
    "logoURL":"https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png",
    "logoAlpha": "80",
    "logoScale": "8",
    "canvastopmargin":"75",
    // "valueFontColor":"#000000",
    "logoPosition": "TR",
    "logoleftmargin":"-20",
    "logotopmargin":"10",
    "yaxisminvalue":"245000",
    "plotfillalpha":"90",
  },"column2d");
 ReactDOM.unmountComponentAtNode(document.getElementById('chart-viewer'));
  ReactDOM.render(<ReactFC {...chartConfig} />, document.getElementById('chart-viewer'));
  //ReactDOM.render(<radio/> , document.getElementById('radio'));
})
.catch((err) => {
  console.log(err);
  this.setState({
    msg: String(err)
  });
}); 


    }
    else if(event.target.value==="cplus"){
 console.log("Hi I am on C++")

grabUsers("language:C++")
.then((data) => {
  var chartConfig= generateChartConfig(data,{
    "caption":"C++ Users - 2017",
    "captionfontsize":"20",
    "theme":"fint",
    "logoURL":"https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png",
    "logoAlpha": "80",
    "logoScale": "8",
    "canvastopmargin":"75",
      // "valueFontColor":"#000000",
    "logoPosition": "TR",
    "logoleftmargin":"-20",
    "logotopmargin":"10",
    "yaxisminvalue":"350000"
  },"column2d");
 ReactDOM.unmountComponentAtNode(document.getElementById('chart-viewer'));
  ReactDOM.render(<ReactFC {...chartConfig} />, document.getElementById('chart-viewer'));
  //ReactDOM.render(<radio/> , document.getElementById('radio'));
})
.catch((err) => {
  console.log(err);
  this.setState({
    msg: String(err)
  });
}); 




    }
     else if (event.target.value==="javascript"){
 console.log("Hi I am on JavaScript")

grabUsers("language:JavaScript")
.then((data) => {
  var chartConfig= generateChartConfig(data,{
    "caption":"JavaScript Users - 2017",
    "captionfontsize":"20",
    "theme":"fint",
    "logoURL":"https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png",
    "logoAlpha": "80",
    "logoScale": "8",
    "canvastopmargin":"75",
      // "valueFontColor":"#000000",
    "logoPosition": "TR",
    "logoleftmargin":"-20",
    "logotopmargin":"10",
    "yaxisminvalue":"1200000"
  },"column2d");
 ReactDOM.unmountComponentAtNode(document.getElementById('chart-viewer'));
  ReactDOM.render(<ReactFC {...chartConfig} />, document.getElementById('chart-viewer'));
  //ReactDOM.render(<radio/> , document.getElementById('radio'));
})
.catch((err) => {
  console.log(err);
  this.setState({
    msg: String(err)
  });
}); 

}

 else{
 

grabUsers("")
.then((data) => {
  var chartConfig= generateChartConfig(data,{
    "caption":"GitHub Users - 2017",
    "captionfontsize":"20",
    "theme":"fint",
    "logoURL":"https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png",
    "logoAlpha": "80",
    "logoScale": "8",
    "canvastopmargin":"75",
    
    "logoPosition": "TR",
    "logoleftmargin":"-20",
    "logotopmargin":"10",
    "yaxisminvalue":"12000000"
  },"column2d");
 ReactDOM.unmountComponentAtNode(document.getElementById('chart-viewer'));
  ReactDOM.render(<ReactFC {...chartConfig} />, document.getElementById('chart-viewer'));
  //ReactDOM.render(<radio/> , document.getElementById('radio'));
})
.catch((err) => {
  console.log(err);
  this.setState({
    msg: String(err)
  });
}); 


}
}


  render() {
    return (
    


      <div>
      
     <div id="chart-viewer">
          {this.state.msg}
      </div>
       
      <br /> 

      <div id="radio" onChange= {this.setlang.bind(this)}>

      <label id="container">Java  
        <input type="radio" value="java" name="lang" />
         <span id="checkmark"></span>
         </label>

         <label id="container">C  
        <input type="radio" value="C" name="lang" />
         <span id="checkmark"></span>
         </label>

         <label id="container">C++  
        <input type="radio" value="cplus" name="lang" />
         <span id="checkmark"></span>
         </label>


         <label id="container">JavaScript  
        <input type="radio" value="javascript" name="lang" /> 
         <span id="checkmark"></span>
         </label>

         <label id="container">All  
          <input type="radio" value="all" name="lang" defaultChecked="true"/>
           <span id="checkmark"></span>
           </label>
      </div>
      </div>
     
    );

  }
}

function grabUsers(query) {
  const promises = [];
let i = 1;
for(; i<=12; i++) {
  const promise = fetch("https://api.github.com/graphql", {
    method: "POST",
    async: false,
    headers: {
      "Authorization": 'bearer d23e97911c0554fe8e1e13010cea0e7e85580781',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      query: `
        {
          search(type: USER, query: "created:<2017-${i < 10 ? ('0' + i) : i + ''}-01 ${query}") {
            userCount
          }
        }
      `
    })
  })
  .then((r) => r.json())
  promises.push(promise);
}

return Promise.all(promises);
}

function generateChartConfig(data,chartAttr,chartType){
   const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
  const chartData = data.map((d, i) => {
    return {
      label: monthNames[i],
      value: d.data.search.userCount
    };
  });
  const dataSource = {
    "chart": chartAttr,
    "data": chartData
  };
  var revenueChartConfigs = {
    type: chartType,
    width:800,
    height: 400,
    dataFormat: 'json',
    dataSource: dataSource
    
  };

  return revenueChartConfigs;
}


export default App;