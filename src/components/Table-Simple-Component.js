import React from "react";

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Activity</th>
        </tr>
        </thead>
    )
}
const TableBody = () => {
    return (
        <tbody>
        <tr>
            <td>Charlie</td>
            <td>Teacher</td>
        </tr>
        <tr>
            <td>Javier</td>
            <td>Athletic</td>
        </tr>
        <tr>
            <td>Denise</td>
            <td>Aspiring actress</td>
        </tr>
        <tr>
            <td>Daniela</td>
            <td>Bartender</td>
        </tr>
        </tbody>
    )
}

class TableSimpleComponent extends React.Component {
    render() {
        return (
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
        )
    }
}

export default TableSimpleComponent;
