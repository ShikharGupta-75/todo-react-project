const Track = ({trackTodos}) => {
  const completed = trackTodos.filter((todo) => todo.completed);
  return (
    <div className="border border-2 border-secondary rounded-5 text-white row align-items-center p-3 justify-content-around mb-3">
      <div className="text-center my-2 col-7">
        <h1>Yet Todo</h1>
        <div className="fs-4 fw-bold my-2">Keep it up</div>
      </div>
      <div className="col-auto bg-danger rounded-circle p-5 fs-1 fw-bold me-2">
        {completed.length}/{trackTodos.length}
      </div>
    </div>
  );
};

export default Track;
