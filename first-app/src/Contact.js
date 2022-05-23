import './Contact.css'
function Contact (props) {
  const { infoList, deleteContact } = props;
  const formList = infoList.map(contact => {
    // if (contact.age > 30) {
    //   return (
    //     <div className="content" key={contact.id}>
    //       <div>Name: {contact.name}</div>
    //       <div>age: {contact.age}</div>
    //       <div>sex: {contact.sex}</div>
    //     </div>
    //   )
    // } else {
    //   return null;
    // }

    return contact.age > 30 ? (
      <div className="content" key={contact.id}>
        <div>Name: {contact.name}</div>
        <div>age: {contact.age}</div>
        <div>sex: {contact.sex}</div>
        <button onClick={() => deleteContact(contact.id)}>删除</button>
      </div>
    ) : null;
  });
  
  return formList;
}

export default Contact;
