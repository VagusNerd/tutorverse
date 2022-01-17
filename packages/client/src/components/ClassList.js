import React, { useState, useEffect } from 'react';
import { Container, Button, ListGroup, Row, Col, Card, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function ClassList({ user }) {
  const [classes, setClasses] = useState([]);
	const [keys, setKeys] = useState(user.classIds);

  const getClasses = async () => {
    try {
      user.classIds.map(async id => {
        const cls = await axios.get(`http://localhost:3001/classes/${id}`);
        setClasses((classes)=> [...classes, cls.data])
      })
    } catch(err) {
      console.error(err);
    }
  }
  
  useEffect(() => {
    getClasses()
  }, []);
  
  console.log(classes)
  return (
    <div className="classes">
      {/* {classes.map((cls, i) => <ClassDetails cls={cls} key={i} />)} */}
      {
						
            classes.map((c) => {
              return (
                <Card className="class" key={c._id}>
                  <Card.Header>
                    <Link
                      to={{
                        pathname: `/class-detail/${c._id}`,
                      }}
                    >
                      Class: {c.name}
                    </Link>
                  </Card.Header>
                  <Card.Body>
                    Students: {c.students.length}<br/>
                    Assignments: {c.assignments.length}
                  </Card.Body>
                  </Card>
              )
            })
        }
    </div>
  )
}
