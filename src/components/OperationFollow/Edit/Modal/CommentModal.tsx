import { checkUserRoleService, editSubmit } from "@/redux/OperationFollow/service";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

interface MyProps {
    setShow: boolean;
    setFormData: (val: any) => void;
    formData: any;
    closeModal: () => void;
    commentName: string;
    commentSection: number;
}

export default function CommentModal(props: MyProps){

    const [commentText, setCommentText] = useState('');

    const setShow = props.setShow;
    const setFormData = props.setFormData;
    const formData = props.formData;
    const closeModal = props.closeModal;
    const commentName = props.commentName;
    const commentSection = props.commentSection;
    const dispatch = useDispatch();
    const role = checkUserRoleService();

    const deleteConfirm = () => {
        deleteConfirm();
        closeModal();
    };

    const handleClose = () => {
        closeModal();
    }

    const handleConfirm = () => {
        if(commentSection == 1){
            setFormData({
                ...formData,
                section1: {
                    ...formData.section1,
                    comment: {
                        ...formData.section1.comment,
                        [commentName]: commentText
                    }
                }
            });

            editSubmit(formData.id,dispatch,{
                ...formData,
                section1: {
                    ...formData.section1,
                    comment: {
                        ...formData.section1.comment,
                        [commentName]: commentText
                    }
                }
            })
        }

        if(commentSection == 2){
            setFormData({
                ...formData,
                section2: {
                    ...formData.section2,
                    comment: {
                        ...formData.section2.comment,
                        [commentName]: commentText
                    }
                }
            });

            editSubmit(formData.id,dispatch,{
                ...formData,
                section2: {
                    ...formData.section2,
                    comment: {
                        ...formData.section2.comment,
                        [commentName]: commentText
                    }
                }
            })
        }

        if(commentSection == 3){
            setFormData({
                ...formData,
                section3: {
                    ...formData.section3,
                    comment: {
                        ...formData.section3.comment,
                        [commentName]: commentText
                    }
                }
            });

            editSubmit(formData.id,dispatch,{
                ...formData,
                section3: {
                    ...formData.section3,
                    comment: {
                        ...formData.section3.comment,
                        [commentName]: commentText
                    }
                }
            })
        }

        if(commentSection == 4){
            setFormData({
                ...formData,
                section4: {
                    ...formData.section4,
                    comment: {
                        ...formData.section4.comment,
                        [commentName]: commentText
                    }
                }
            });

            editSubmit(formData.id,dispatch,{
                ...formData,
                section4: {
                    ...formData.section4,
                    comment: {
                        ...formData.section4.comment,
                        [commentName]: commentText
                    }
                }
            })
        }

        closeModal();
    }

    useEffect(() => {   
        if(commentSection == 1){
            setCommentText(formData.section1.comment[commentName])
        }

        if(commentSection == 2){
            setCommentText(formData.section2.comment[commentName])
        }

        if(commentSection == 3){
            setCommentText(formData.section3.comment[commentName])
        }

        if(commentSection == 4){
            setCommentText(formData.section4.comment[commentName])
        }
    },[setShow])

    const handleChangeField = (e: any) => {
        const { name, value } = e.target;

        setCommentText(value)
    }



    return (
        <>
            <Modal show={props.setShow} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <textarea
                    onChange={(e) => handleChangeField(e)}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={4}
                    value={commentText}
                ></textarea>
                </Modal.Body>
                <Modal.Footer>
                {role == 'admin' &&
                    <Button variant="primary" onClick={handleConfirm}>
                        Confirm
                    </Button>
                }
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}