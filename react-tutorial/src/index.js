import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// 无状态组件必须返回jsx
/*
  jsx规则
  1.return 单个根标签
  2.容器可以使用div、section、article、React.Fragment
  3.html属性名使用驼峰命名法
  4.className替换class
  5.每个标签必须有封闭
  6.()格式化将标签()包裹起来
*/
const books = [
  {
    id:'123',
    job: '1111',
    number: '2222'
  },
  {
    id:'456',
    job: '3333',
    number: '4444'
  },
  {
    id:'789',
    job: '5555',
    number: '6666'
  }
];

function Greeting() {
  return (
    <section>
      {books.map(book => {
        return <Book book={book} key={book.id}>NiHaoA!</Book>
      })}
    </section>
  );
}

const Book = (props) => {
  const { job, number, children } = props.book;
  console.log(job, number, children)
  return (<article>小书单</article>)
};

// 箭头函数实现
// const Greeting = () => <h4>Hello React!</h4>;
// const Greeting = () => {
//   return React.createElement('div',{},'WaHaHa!');
// };

ReactDOM.render(<Greeting />, document.getElementById('root'));
