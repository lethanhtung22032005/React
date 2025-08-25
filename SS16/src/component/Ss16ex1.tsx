import React, { Component } from 'react'

export default class Ss16ex1 extends Component {
    render() {
        const Subjects = ["Toán", "Văn", "Anh", "Hóa", "Sinh"]
        const SubjectList = Subjects.map((item, index) => <p key={index}>{item}</p>)

        return (
            <>
                <h3>Danh sách môn học</h3>
                {SubjectList}
            </>
        )
    }
}
