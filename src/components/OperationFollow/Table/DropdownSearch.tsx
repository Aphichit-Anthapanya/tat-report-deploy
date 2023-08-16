import { FormState } from '@/redux/OperationFollow/types';
import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface DropdownSearchProps {
  items: any[],
  setAddField: (value:string) => void
  formList: any
}


export default function DropdownSearch(props: DropdownSearchProps) {
  const formState: any = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  
  // const {filter,setFilter} = props
  const [filter, setFilter] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const filteredItems = props.items.filter((item:any) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleClick = (item: any) => {
    console.log('moo')
    setFilter(item.name);
    setIsOpen(false);
    props.setAddField(item.name)
  };

  const setFilterHandle = (e: any) => {
    if(filter != ''){
      setFilter(e.target.value)
      setIsOpen(true)
    }else{
      setFilter(e.target.value)
      setIsOpen(false)
    }
  }

  const handleBlur = (e: any) => {
    setTimeout(()=>{
      setIsOpen(false)
    },500)
  }

  useEffect(()=>{
    setFilter('')
  },[props.formList])

  return (
    <div className="dropdown">
      <input
        type="text"
        className='form-control'
        value={filter}
        onFocus={() => setIsOpen(true)}
        onChange={(e) => setFilterHandle(e)}
        placeholder="ค้นหา..."
        onBlur={(e) => handleBlur(e)}
      />
      {isOpen && 
        <div className='dropdown-search-table'>
          {filteredItems.map((item:any,index: number) => (
            <div className='dropdown-search-selection' key={index} onClick={() => handleClick(item)}>
              {item.name}
            </div>
          ))}
        </div>
      }
    </div>
  );
};

