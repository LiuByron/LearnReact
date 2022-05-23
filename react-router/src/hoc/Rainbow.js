const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple'];
  const randomColor = colors[Math.floor(Math.random() * 8)];
  const className = `${randomColor}-text`;

  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default Rainbow;