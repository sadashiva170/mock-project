// const Categories = [
//     {
//        "Category": "Wrigley",
//        "Year": 2018,
//        "Sales": 180,
//        "Profit": 61,
//      },
//     {
//        "Category": "Wrigley",
//        "Year": 2019,
//        "Sales": 196,
//        "Profit": 69,
//      },
//     {
//        "Category": "Wrigley",
//        "Year": 2020,
//        "Sales": 171,
//        "Profit": 47,
//      },
//      {
//        "Category": "Wrigley",
//        "Year": 2021,
//        "Sales": 169,
//        "Profit": 42,
//      },
//     {
//        "Category": "Wrigley",
//        "Year": 2022,
//        "Sales": 210,
//        "Profit": 75,
//      },
//      {
//        "Category": "Petcare",
//        "Year": 2018,
//        "Sales": 201,
//        "Profit": 71,
//      },
//     {
//        "Category": "Petcare",
//        "Year": 2019,
//        "Sales": 215,
//        "Profit": 68,
//      },
//     {
//        "Category": "Petcare",
//        "Year": 2020,
//        "Sales": 187,
//        "Profit": 49,
//      },
//      {
//        "Category": "Petcare",
//        "Year": 2021,
//        "Sales": 179,
//        "Profit": 45,
//      },
//     {
//        "Category": "Petcare",
//        "Year": 2022,
//        "Sales": 195,
//        "Profit": 73,
//      },
//      {
//        "Category": "Food",
//        "Year": 2018,
//        "Sales": 183,
//        "Profit": 55,
//      },
//     {
//        "Category": "Food",
//        "Year": 2019,
//        "Sales": 161,
//        "Profit": 61,
//      },
//     {
//        "Category": "Food",
//        "Year": 2020,
//        "Sales": 143,
//        "Profit": 41,
//      },
//      {
//        "Category": "Food",
//        "Year": 2021,
//        "Sales": 139,
//        "Profit": 33,
//      },
//     {
//        "Category": "Food",
//        "Year": 2022,
//        "Sales": 160,
//        "Profit": 41,
//      },
//      {
//        "Category": "Edge",
//        "Year": 2018,
//        "Sales": 162,
//        "Profit": 40,
//      },
//     {
//        "Category": "Edge",
//        "Year": 2019,
//        "Sales": 169,
//        "Profit": 42,
//      },
//     {
//        "Category": "Edge",
//        "Year": 2020,
//        "Sales": 177,
//        "Profit": 50,
//      },
//      {
//        "Category": "Edge",
//        "Year": 2021,
//        "Sales": 180,
//        "Profit": 61,
//      },
//     {
//        "Category": "Edge",
//        "Year": 2022,
//        "Sales": 193,
//        "Profit": 74,
//      },
//    ]
   

// export default Categories




// let c=[
//     { id: 1,catergory:milkybar,year:[2018,2019,2020,2021],sales:[20,60,30,21,56], profit: [10, 20, 30, 40, 50]},
//     { id: 2, catergory:bounty,year:[2018,2019,2020,2021],sales:[20,60,30,21,56], profit: [10, 20, 30, 40, 50]},
//     { id: 3, catergory:galaxy,year:[2018,2019,2020,2021],sales:[20,60,30,21,56], profit: [10, 20, 30, 40, 50]},
//     { id: 4, catergory:snickers,year:[2018,2019,2020,2021],sales:[20,60,30,21,56], profit: [10, 20, 30, 40, 50] },
//   ]

//   const data = cartsData.map((cart) => {
//     const chartData = [];
//     for (let i = 0; i < cart.year.length; i++) {
//       chartData.push({
//         year: cart.year[i],
//         sales: cart.sales[i],
//         profit: cart.profit[i]
//       });
//     }
//     return { name: cart.category, data: chartData };
//   });
//   const MyChart = () => {
//     return (
//       <BarChart width={600} height={400} data={data}
//       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="year" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       {data.map((item, index) => (
//         <Bar key={item.name} dataKey="sales" stackId={`stack-${index}`} fill={colors[index % colors.length]} />
//       ))}
//       {data.map((item, index) => (
//         <Bar key={item.name} dataKey="profit" stackId={`stack-${index}`} fill={colors[index % colors.length]} />
//       ))}
//     </BarChart>
//     );
//   };
  

// {cart.map((cartData) => (
//   <div key={cartData.id}>
//     <LineChart width={600} height={400} data={cartData}>
//       <CartesianGrid stroke="#ccc"/>
//       <XAxis dataKey="year"/>
//       <YAxis/>
//       <Tooltip/>
//       <Legend/>
//       <Line type="monotone" dataKey={sales[index]} stroke="#8884d8" name={cartData.catergory}/>
//       <Line type="monotone" dataKey={profit[index]} stroke="#8984d9" name={`${cartData.catergory} profit`} />
//     </LineChart>
//   </div>
// ))}

// const [SelectedCart, setSelectedCart] = useState(null);

// const handleCartClick = (id) => {
//   setSelectedCart(id);
// };

// const dataToShow = SelectedCart ? cartsData.filter((cart) => cart.id === SelectedCart) : cartsData;

// const MyChart = () => {
//   return (
//     dataToShow.map((cartData) => (
//       <div key={cartData.id}>
//         <LineChart width={600} height={400} data={cartData.year}>
//           <CartesianGrid stroke="#ccc"/>
//           <XAxis dataKey="year"/>
//           <YAxis/>
//           <Tooltip/>
//           <Legend/>
//           <Line type="monotone" dataKey={cartData.sales} stroke="#8884d8" name={`${cartData.category} sales`}/>
//           <Line type="monotone" dataKey={cartData.profit} stroke="#82ca9d" name={`${cartData.category} profit`}/>
//         </LineChart>
//       </div>
//     ))
//   );
// };

// const Cart = ({ cart }) => {
//   return (
//     <div className="cart" onClick={() => handleCartClick(cart.id)}>
//       <h2>{cart.category}</h2>
//       <p>Sales: {cart.sales.reduce((total, current) => total + current)}</p>
//       <p>Profit: {cart.profit.reduce((total, current) => total + current)}</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="app">
//       <div className="carts">
//         {cartsData.map((cart) => (
//           <Cart key={cart.id} cart={cart} />
//         ))}
//       </div>
//       <div className="chart">
//         <MyChart />
//       </div>
//     </div>
//   )

// };

const cartData=[   
     { id: 1, category: 'MILKY-BAR', year: [2018, 2019, 2020, 2021,2022], sales: [   162,162,162,177,180], profit: [ 40,  40,42,50,61], viewMode: 'table',columns: []},
     { id: 2, category: 'BOUNTY', year: [2018, 2019, 2020, 2021,2022], sales:  [ 183, 161, 143, 139, 160], profit:[ 55, 61, 41, 33, 41], viewMode: 'table' ,columns: []},
     { id: 3, category: 'GALAXY', year: [2018, 2019, 2020, 2021,2022], sales: [   201,215,187,179,195], profit: [  70,69,49,45,73], viewMode: 'table',columns: []},
     { id: 4, category: 'SNICKERS', year: [2018, 2019, 2020, 2021,2022], sales: [    180,196,171,169,210], profit: [  61,  69,46, 42,75], viewMode: 'table',columns: [] },
   ]

 export default Dataset;