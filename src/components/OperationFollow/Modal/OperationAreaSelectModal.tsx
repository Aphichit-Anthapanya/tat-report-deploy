import { operationAreaFilterService } from "@/redux/OperationFollow/Section3/service";
import { getOperationAreaService } from "@/redux/services/operation-follow-api";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface MyProps {
    setShow: boolean;
    handleClose: () => void;
    handleConfirmOperationArea: (val: any) => void;
  }

export default function OperationAreaSelect(props: MyProps) {


    const [queryField, setQueryField] = useState({
        country: '',
        province: '',
        projectType: '00'
    })

    const [originalAreaData, setOriginalAreaData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);

    const [areaData, setAreaData] = useState([])

    const [addedData, setAddedData] = useState([])

    const [pageSize, setPageSize] = useState(10)
    const [pageStart, setPageStart] = useState(0)
    const [pageEnd, setPageEnd] = useState(pageStart + pageSize)
    const [totalPages, setTotalPage] = useState(0);

    const handleChangeField = (e:any) => {
        const {name,value} = e.target

        setQueryField({
            ...queryField,
            [name]: value
        })
    }

    const handleClose = () => props.handleClose();

    const handleConfirm = () => {
  
        console.log('send data')

        console.log(addedData)

        // props.handleClose();
        props.handleConfirmOperationArea(addedData)
        props.handleClose()
  
    };

    const handlePageChange = (pageNumber: number) => {
        const newStart = (pageNumber - 1) * pageSize;
        setPageStart(newStart);
        setPageEnd(newStart + pageSize);
        setCurrentPage(pageNumber);
      };

    const clearData = () => {
        setQueryField({
            country: '',
            province: '',
            projectType: '00' 
        })
    }

    const searchData = () => {
        const itemData:any = operationAreaFilterService(queryField, originalAreaData)
        setAreaData(itemData)
        handlePageChange(1)
        setTotalPage((itemData.length - 1) > 19 ? 19 : itemData.length - 1)

        let _addedData:any = [...addedData]
        let _itemData:any = [...itemData]
        for(let i = 0; i < _addedData?.length; i++){
            const id = _addedData[i]?.id
            const indx = _itemData.findIndex((item:any) => item.id == id)
            if(indx != -1){
                _itemData[i].isSelect = true
                setAreaData(_itemData)
            }
        }
    }

    const handleCheck = (e: any,data: any, index: number) => {
        const {name, checked} = e.target

        if(checked){
            let _addedData:any = [...addedData]
            _addedData.push(data)
            setAddedData(_addedData)

            let _areaData: any = [...areaData]
            _areaData[index].isSelect = true
            setAreaData(_areaData)
        }else {
            console.log('come false')
            let _addedData:any = [...addedData]
            const filterOut = _addedData.filter((items:any) => 
                data.id != items.id
            )
            setAddedData(filterOut)

            let _areaData: any = [...areaData]
            _areaData[index].isSelect = false
            setAreaData(_areaData)
        }

    }

    useEffect(()=>{
        async function getOperationArea(){
            const response:any = await getOperationAreaService()
            setOriginalAreaData(response.data)
            const itemData:any = operationAreaFilterService(queryField, response.data)
            setTotalPage(Math.ceil((response.data?.length) / pageSize) > 19 ? 19 : Math.ceil((response.data?.length) / pageSize))
            setAreaData(itemData)
        }
        getOperationArea()
        setAddedData([])
    },[props.setShow])

    return (
        <>
            <Modal size="lg" show={props.setShow} onHide={handleClose} >
            <Modal.Header closeButton>
            <Modal.Title>เพิ่มข้อมูล {'>'} พื้นที่ดำเนินการ</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div className="operation-area-search-wrapper">
                    <div className="upper-filter">
                        <div className="header p-2">
                            เงื่อนไขการค้นหา
                        </div>
                        <div className="filter-form">
                            <div className="d-flex">
                                <div className="left-form d-flex">
                                    <div className="label-form">
                                        พิื้นที่/ประเทศ:
                                    </div>
                                    <div className="field-form">
                                        <input
                                        value={queryField.country}
                                        name="country"
                                        onChange={(e) => handleChangeField(e)} 
                                        className="form-control" type="text" />
                                    </div>        
                                </div>
                                <div className="right-form d-flex">
                                    <div className="label-form">
                                        จังหวัด/เมือง:
                                    </div>
                                    <div className="field-form">
                                        <input
                                        value={queryField.province}
                                        name="province" 
                                        onChange={(e) => handleChangeField(e)} 
                                        className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="left-form d-flex">
                                    <div className="label-form">
                                        ประเภทพื้นที่ดำเนินการ:
                                    </div>
                                    <div className="field-form">
                                        <select
                                            style={{width: 'fit-content'}}
                                            name="projectType"
                                            value={queryField.projectType}
                                            onChange={(e) => handleChangeField(e)} 
                                            defaultValue={"00"}
                                            className="form-select"
                                        >
                                            <option value="02">แผนบริหารจัดการองค์กร</option>
                                            <option value="00">แผนบริหารจัดการในประเทศ</option>
                                            <option value="01">แผนบริหารจัดการต่างประเทศ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="right-form d-flex">
                                </div>
                            </div>
                            <div className="button-zone d-flex justify-content-center">
                                <button onClick={searchData} style={{marginRight:5}} className="btn btn-primary">ค้นหา</button>
                                <button onClick={clearData} className="btn btn-secondary ">ล้างค่า</button>
                            </div>
                        </div>
                    </div>
                    <div className="selection-table-wrapper">
                        <table style={{width: '100%'}}>
                            <thead>
                                <tr>
                                    <th scope="col">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    </th>
                                    <th scope="col">พื้นที่/ประเทศ</th>
                                    <th scope="col">จังหวัด/เมือง</th>
                                </tr>
                            </thead>
                            <tbody>
                            {areaData?.slice(pageStart,pageEnd).map((item: any, index: number) => (
                                <tr key={item.id}>
                                    <td>
                                        <input
                                        onChange={(e) => handleCheck(e,{
                                            id: item.id,
                                            countryarea: item.countryarea,
                                            province: item.province,
                                            isSelect: item.isSelect
                                        }, index + pageStart)}
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={item.isSelect}
                                        id="flexCheckDefault"
                                        />
                                    </td>
                                    <td>
                                       {item.countryarea}
                                    </td>
                                    <td>
                                        {item.province}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="pagination-wrapper d-flex">
                            <div className="pagination-status">
                            </div>
                            <div className="pagination-links">
                                <ul className="pagination">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li
                                        className={`page-item ${
                                            currentPage === index + 1 ? "active" : ""
                                        }`}
                                        >
                                        <a
                                            onClick={() => handlePageChange(index + 1)}
                                            className="page-link"
                                            href="javascript:void(0)"
                                        >
                                            {index + 1}
                                        </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="">
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleConfirm}>
                Confirm
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
            </Modal>
        </>
      );
}