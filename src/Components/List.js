import { useState, useEffect } from 'react';

export default function List() {
    var [counter, setCounter] = useState(1);
    const [user, setUser] = useState({ id: 0, name: '', age: 0, city: '' });
    const [allUsers, setUserInList] = useState([]);

    useEffect(() => {
        if (counter > 1) setUserInList([...allUsers, user]);
    }, [counter]);

    function handelSubmit(e) {
        e.preventDefault();
        console.log('submit clicked...');

        setUser({ ...user, id: counter });
        setCounter(++counter);
        console.log('allUsers := ', allUsers);
    }

    function handelDelete(e) {
        console.log(' ==>> ', e.target.id);

        if (e.target.id == 'deleteAllBtn') {
            setUserInList([]);
        } else {
            setUserInList(
                allUsers.filter((user) => {
                    return user.id !== e.target.id;
                })
            );
        }
    }

    return (
        <>
            <div className="container-fluid w-50 my-5">
                <form onSubmit={handelSubmit} className="border p-4">
                    <div className="h4 pb-2 mb-4 mt-3 border-bottom border-primary fw-bolder">
                        Add Employee
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-2 col-formHtml-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="userNameInput"
                                value={user.name}
                                onChange={(e) =>
                                    setUser({ ...user, name: e.target.value })
                                }
                            />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label
                            forHtml="userAgeInput"
                            className="col-sm-2 col-form-label"
                        >
                            Age
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="userAgeInput"
                                value={user.age}
                                onChange={(e) =>
                                    setUser({ ...user, age: e.target.value })
                                }
                            />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">City</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="userCityInput"
                                value={user.city}
                                onChange={(e) =>
                                    setUser({ ...user, city: e.target.value })
                                }
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={handelSubmit}
                    >
                        Submit
                    </button>
                </form>

                <div className="h4 pb-2 mb-4 mt-5 border-bottom border-primary fw-bolder">
                    Employee List
                </div>

                <table className="table border p-4">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">City</th>
                            {allUsers.length != 0 && (
                                <th scope="col">
                                    <span
                                        className="badge bg-primary rounded-pill"
                                        type="button"
                                        id="deleteAllBtn"
                                        onClick={handelDelete}
                                    >
                                        Delete All
                                    </span>
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td scope="col">{user.name}</td>
                                    <td scope="col">{user.age}</td>
                                    <td scope="col">{user.city}</td>
                                    <td>
                                        <span
                                            className="badge bg-primary rounded-pill"
                                            type="button"
                                            id={user.id}
                                            onClick={handelDelete}
                                        >
                                            Delete
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
