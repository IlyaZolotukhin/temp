import React, {useEffect,useState} from "react";

export default {
    title: 'useEffect demo'
}

export const DocumentTitle = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log("SimpleExample");

    useEffect(() => {
        console.log("useEffect каждый раз перерисовывается");
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log("useEffect один раз создается (componentDidMount)");
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log("useEffect перерисовывается первый раз и последующие при изменении counter");
        document.title = counter.toString();
    },[counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={()=>setFake(fake +1)}>fake+</button>
        <button onClick={()=>setCounter(counter +1)}>counter+</button>
    </>
}

export const SetTimeout = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log("SetTimeoutExample");

    /*Для сетТаймаута раскомментировать внизу кнопки
    useEffect(() => {
        setTimeout(()=> {
            console.log("setTimeout")
            document.title = counter.toString();
        }, 3000);
    },[counter])*/

    useEffect(() => {
        setInterval(()=> {
            console.log("tick" +counter)
            setCounter((state) => state + 1);
        }, 1000);
    },[])



    return <>
        Hello!, counter: {counter} - fake: {fake}
        {/*<button onClick={()=>setFake(fake +1)}>fake+</button>
        <button onClick={()=>setCounter(counter +1)}>counter+</button>*/}
    </>
}