import React from 'react';

const MyComponent = (props) => {
    return <div> 처음 만드는 React 컴포넌트!! props name ==> prop name 이 없으면 디폴트 react {props.name}</div>
}

MyComponent.defaultProps = {
    name:'react'
}

// 이 파일을 다른 파일에서 import할때 MyComponent 클래스를 불러오도록 설정
export default MyComponent;