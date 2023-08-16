import { FormState } from '@/redux/OperationFollow/types';
import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface DropdownSearchProps {
  items: any[],
  setAddField: (value:string) => void
  dropdownName: string
  formList: any
}


export default function DropdownSearch2(props: DropdownSearchProps) {
    const formState: any = useSelector(
        (state: RootState) => state.operationFollowForm
    );
  
    // const {filter,setFilter} = props
    const [filter, setFilter] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const [dropdownName, setDropdownName] = useState('');

    const filteredItems = () => {
        if(props.dropdownName === 'projectTarget'){
            return props.items?.filter((item:any) =>
                item.targetGroupNameTh.toLowerCase().includes(filter.toLowerCase())
            );
        }

        if(props.dropdownName === 'mainOutcome'){
            return props.items?.filter((item:any) =>
            item.outcomeNameTh.toLowerCase().includes(filter.toLowerCase())
            );
        }
    }

  const handleClick = (item: any) => {
    if(props.dropdownName === 'projectTarget'){
        setFilter(item.targetGroupNameTh);
        setIsOpen(false);
        props.setAddField(item.targetGroupId)
    }

    if(props.dropdownName === 'mainOutcome'){
        setFilter(item.outcomeNameTh);
        setIsOpen(false);
        props.setAddField(item.mainOutcomeId)
    }
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

  useEffect(() => {
    setDropdownName(props.dropdownName)
  })

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
      {isOpen && dropdownName == 'projectTarget' &&
        <div className='dropdown-search-table'>
          {filteredItems()?.map((item:any,index: number) => (
            <div className='dropdown-search-selection' key={index} onClick={() => handleClick(item)}>
              {item.targetGroupNameTh}
            </div>
          ))}
        </div>
      }
        {isOpen && dropdownName == 'mainOutcome' &&
        <div className='dropdown-search-table'>
          {filteredItems()?.map((item:any,index: number) => (
            <div className='dropdown-search-selection' key={index} onClick={() => handleClick(item)}>
              {item.outcomeNameTh}
            </div>
          ))}
        </div>
      }
    </div>
  );
};

