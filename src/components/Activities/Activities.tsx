import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateActivity } from "@/redux/OperationFollow/action";
import { fetchActivitiesdataService } from "@/redux/OperationFollow/Activities/service";
import { saveCurrentForm } from "@/redux/OperationFollow/service";

import "./activities-add.scss";
import { useParams, useRouter } from "next/navigation";
import { id } from "date-fns/locale";
import { EnvConfig } from "@/config";
import { approvalSendService, useApprovalSendServiceMutation, useCreateOperationFollowFormMutation } from "@/redux/services/operation-follow-api";
import { useGetClosedGapQuery, useGetConsistencyMasterQuery, useGetConsistencyPolicyQuery, useGetStakeHolderFiveQuery, useGetStakeHolderFourQuery, useGetStakeHolderOneQuery, useGetStakeHolderThreeQuery, useGetStakeHolderTwoQuery } from "@/redux/services/master-data";

interface ActivityProps {
  onChangeAddActivity: () => void;
}

interface tableDataItem {
  catname: string;
  activity_type: string;
  activity_name: string;
  activity_order: string;
  activity_shared: string;
  act_status: string;
  work_status: string;
  budget: string;
  total_act_budget: string;
}

export async function getServerSideProps(context: any) {
  const id = context.params.id; // Get ID from slug `/book/1`
  // Rest of `getServerSideProps` code
}

export default function Activities({ onChangeAddActivity }: ActivityProps) {
  const [activityTableList, setActivityTableList] = useState<tableDataItem[]>(
    []
  );
  const [isEdit, setIsEdit] = useState(false);
  const formState = useSelector(
    (state: RootState) => state.operationFollowForm
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();

  const [createOperationFollowForm, { isLoading, isError }] = useCreateOperationFollowFormMutation();
  const [sendApprovalService] = useApprovalSendServiceMutation()
  const { data: consistencyMasterData } = useGetConsistencyMasterQuery({})
  const { data: consistencyPolicyData } = useGetConsistencyPolicyQuery({})
  const { data: gapsData } = useGetClosedGapQuery({})
  const { data: stakeHolderOneData } = useGetStakeHolderOneQuery({})
  const { data: stakeHolderTwoData } = useGetStakeHolderTwoQuery({})
  const { data: stakeHolderThreeData } = useGetStakeHolderThreeQuery({})
  const { data: stakeHolderFourData } = useGetStakeHolderFourQuery({})
  const { data: stakeHolderFiveData } = useGetStakeHolderFiveQuery({})

  const handleSubmitForm = async () => {
    sendApprovalService(formState.id)
    router.push("/operation-follow");
  };

  const handleEditForm = () => {
    router.push("/operation-follow");
  };

  useEffect(() => {
    const id = typeof params?.id === "string" ? parseInt(params?.id) : 0;
    if (id != 0) {
      setIsEdit(true);
    }
  }, []);

  return (
    <>
      <div className="table-summary-wrapper">
        <div className="table-summary-content">
          {formState.activitiesList.length > 0 && (
            <div className="d-flex justify-content-right p-3">
              <button
                onClick={() =>
                  router.push(
                    "/operation-follow/add-activities/add-worth-activities"
                  )
                }
                type="button"
                className="btn btn-primary add-worth-act-button"
              >
                ความคุ้มค่าของกิจกรรม
              </button>
            </div>
          )}
          <table className="table activity-list-table">
            <thead>
              <tr>
                <th style={{ width: "10%" }} scope="col">
                  ดูช้อมูล
                </th>
                <th style={{ width: "10%" }} scope="col">
                  รายงานผล
                </th>
                <th scope="col">หมวดกิจกรรม</th>
                <th scope="col">ประเภทกิจกรรม</th>
                <th scope="col">ชื่อกิจกรรม</th>
                <th scope="col">ลำกับที่โครงการ</th>
                <th scope="col">สัดส่วนกิจกรรมต่อโครงการ</th>
                <th scope="col">สถานะกิจกรรม</th>
                <th scope="col">สถานะงาน</th>
                <th scope="col">งบประมาณโครงการแผน(บาท)</th>
                <th scope="col">ยอดงบประมาณกิจกรรม</th>
              </tr>
            </thead>
            <tbody>
              {formState.activitiesList.map((data, index) => (
                <tr key={index}>
                  <td>
                    <i className="bi bi-search"></i>
                  </td>
                  <td>
                    <i className="bi bi-file-earmark-text-fill"></i>
                  </td>
                  <td>{data.catname}</td>
                  <td>{data.activity_type}</td>
                  <td>{data.activity_name}</td>
                  <td>{data.activity_order}</td>
                  <td>{data.activity_shared}</td>
                  <td>{data.act_status}</td>
                  <td>{data.work_status}</td>
                  <td>{data.budget}</td>
                  <td>{data.total_act_budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center activity-select-buttonzone">
            <div>
              <button
                onClick={onChangeAddActivity}
                className="btn btn-primary"
                type="submit"
              >
                <i className="bi bi-file-earmark-plus"></i> เพิ่ม
              </button>

              {isEdit == false && (
                <>
                  {formState.activitiesList.length > 0 && (
                    <>
                      <button
                        onClick={handleSubmitForm}
                        className="btn btn-primary"
                        type="submit"
                      >
                        <i className="bi bi-file-earmark-plus"></i> ส่งอนุมัติแผน
                      </button>
                    </>
                  )}
                </>
              )}
              {isEdit == true && (
                <>
                  <button
                    onClick={handleEditForm}
                    className="btn btn-primary"
                    type="submit"
                  >
                    <i className="bi bi-file-earmark-plus"></i> บันทึกการแก้ไข
                  </button>
                </>
              )}

              {EnvConfig.isTesting &&
                <button
                onClick={handleSubmitForm}
                className="btn btn-primary"
                type="submit"
              >
                <i className="bi bi-file-earmark-plus"></i> ส่งอนุมัติแผน
              </button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
