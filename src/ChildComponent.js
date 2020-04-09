import React from 'react';

const child = (props) => {
    return (
        <div>
            안녕하세요 저의 이름으 {props.name} 이구요.
            자식넘으 이름은 {props.children} 입니다.
        </div>
    )
}


child.defaultProps = {
    name: '디폴트',
    children:'자식'
}


export default child

