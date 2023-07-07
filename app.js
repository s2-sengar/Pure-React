const App=()=>{
    const [timer,setTimer]=React.useState();

    React.useEffect(()=>{
        setTimer(new Date().toISOString())
        setInterval(()=>{
            setTimer(new Date().toISOString())
        },100)
    },[])

    return React.createElement("div",null,
        React.createElement("h1",null,timer)
    )
}

const root=ReactDOM.createRoot(document.querySelector('#root'))
root.render(React.createElement(App));