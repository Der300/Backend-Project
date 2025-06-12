// fn tao object form input khi onSubmit form bang <form onSubmit={handleSubmit}>
const InputValueToObject = (event, field) => {
    event.preventDefault();
    let data = {};
    Object.keys(field).forEach((key) => {
        data[key] = event.target[key].value;
    });
    return data;
}
export default InputValueToObject;