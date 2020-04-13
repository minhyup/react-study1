import React, { useState, useEffect } from 'react';

// const IterationSamplpe = () => {

//     const names = ['눈사람', '얼음', '눈', '바람'];
//     const nameList = names.map((name, index) => {
//         return <li key={index}>{name}</li>
//     });

//     return (
//         <ul>
//             {nameList}
//         </ul>
//     )
// }

const IterationSamplpe = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람'},
        { id: 2, text: '얼음'},
        { id: 3, text: '눈'},
        { id: 4, text: '바람'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    useEffect(()=>{
        console.log('렌더링완료');
        
    },[]);

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });

        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = (id) => {

        console.log('id:',id );
        
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames)
    }

    const nameList = names.map(name=><li key={name.id} onDoubleClick={()=>{ 
         onRemove(name.id)
     }}>{name.text}</li>);

    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}
            </ul>
        </div>
    )

}


export default IterationSamplpe;