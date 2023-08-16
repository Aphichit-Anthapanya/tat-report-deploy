"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../operation-follow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateFormField, resetForm } from "@/redux/OperationFollow/reducer";

interface TableQuarterProps {
	onChangeStakeHolder: (data: any) => void;
}
export default function TableStakeHolder({
	onChangeStakeHolder,
}: TableQuarterProps) {
	const formState = useSelector(
		(state: RootState) => state.operationFollowForm
	);
	const dispatch = useDispatch();

	const handleChangeField = (event: any, groupName: string) => {
		const { name, checked } = event.target;

		console.log(checked)

		if(groupName == ''){
			const updateChecked = {
				...formState.section2.stakeHolder_Group,
				[name]: checked,
			};

			dispatch(
				updateFormField({
					...formState,
					section2: {
						...formState.section2,
						stakeHolder_Group: updateChecked,
					},
				})
			);
		}else{

			if(groupName == 'isGovernmentAuditGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isGovernmentAuditGroup: {
						...formState.section2.stakeHolder_Group.isGovernmentAuditGroup,
						[name]: checked
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isProviderCustomerGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isProviderCustomerGroup: {
						...formState.section2.stakeHolder_Group.isProviderCustomerGroup,
						[name]: checked
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isCustomerGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isCustomerGroup: {
						...formState.section2.stakeHolder_Group.isCustomerGroup,
						[name]: checked
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isSenderGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isSenderGroup: {
						...formState.section2.stakeHolder_Group.isSenderGroup,
						[name]: checked
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isGovernmentSenderGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isSenderGroup: {
						...formState.section2.stakeHolder_Group.isSenderGroup,
						isGovernmentSenderGroup: {
							...formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup,
							[name]: checked
						}
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isPrivateSenderGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isSenderGroup: {
						...formState.section2.stakeHolder_Group.isSenderGroup,
						isPrivateSenderGroup: {
							...formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSenderGroup,
							[name]: checked
						}
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isWorkingUnitGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isWorkingUnitGroup: {
						...formState.section2.stakeHolder_Group.isWorkingUnitGroup,
						[name]: checked
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isTourismAssoGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isWorkingUnitGroup: {
						...formState.section2.stakeHolder_Group.isWorkingUnitGroup,
						isTourismAssoGroup: {
							...formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup,
							[name]: checked
						}
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

		}
	};

	const handleChangeField2 = (event: any, groupName: string) => {
		const { name, value } = event.target;

		if(groupName == ''){
			const updateChecked = {
				...formState.section2.stakeHolder_Group,
				[name]: value,
			};

			dispatch(
				updateFormField({
					...formState,
					section2: {
						...formState.section2,
						stakeHolder_Group: updateChecked,
					},
				})
			);
		}else{

			if(groupName == 'isGovernmentAuditGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isGovernmentAuditGroup: {
						...formState.section2.stakeHolder_Group.isGovernmentAuditGroup,
						[name]: value
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isProviderCustomerGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isProviderCustomerGroup: {
						...formState.section2.stakeHolder_Group.isProviderCustomerGroup,
						[name]: value
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isCustomerGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isCustomerGroup: {
						...formState.section2.stakeHolder_Group.isCustomerGroup,
						[name]: value
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isSenderGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isSenderGroup: {
						...formState.section2.stakeHolder_Group.isSenderGroup,
						[name]: value
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isGovernmentSenderGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isSenderGroup: {
						...formState.section2.stakeHolder_Group.isSenderGroup,
						isGovernmentSenderGroup: {
							...formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup,
							[name]: value
						}
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isPrivateSenderGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isSenderGroup: {
						...formState.section2.stakeHolder_Group.isSenderGroup,
						isPrivateSenderGroup: {
							...formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSenderGroup,
							[name]: value
						}
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isWorkingUnitGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isWorkingUnitGroup: {
						...formState.section2.stakeHolder_Group.isWorkingUnitGroup,
						[name]: value
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

			if(groupName == 'isTourismAssoGroup'){
				const updateChecked = {
					...formState.section2.stakeHolder_Group,
					isWorkingUnitGroup: {
						...formState.section2.stakeHolder_Group.isWorkingUnitGroup,
						isTourismAssoGroup: {
							...formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup,
							[name]: value
						}
					}
				};
	
				dispatch(
					updateFormField({
						...formState,
						section2: {
							...formState.section2,
							stakeHolder_Group: updateChecked,
						},
					})
				);
			}

		}
	};

	return (
		<>
			<div className="table-summary-wrapper table-policy">
				<div className="table-summary-header">
					<span>กลุ่มผู้มีส่วนได้ส่วนเสีย (Stakeholder Group)</span>
				</div>
				<div className="table-summary-content">
					<table className="table policy-table">
						<tbody>
							<tr>
								<td colSpan={2}>
									<input
										onChange={(e) => handleChangeField(e,'')}
										className="form-check-input"
										type="checkbox"
										name="isTatStaff"
										checked={formState.section2.stakeHolder_Group.isTatStaff}
										id="flexCheckChecked"
									/>
									<label
										style={{ marginLeft: "10px" }}
										className="form-check-label"
									>
										บุคลากรและลูกจ้างของ ททท.
									</label>
								</td>
								<td colSpan={2}>
									<div>
										<input
											onChange={(e) => handleChangeField(e,'')}
											className="form-check-input"
											type="checkbox"
											name="isProviderCustomer"
											checked={
												formState.section2.stakeHolder_Group.isProviderCustomer
											}
											id="flexCheckChecked"
										/>
										<label
											style={{ marginLeft: "10px" }}
											className="form-check-label"
										>
											ลูกค้า/ผู้ใช้บริการ
										</label>
									</div>
									<div className={`sub-selection ${!formState.section2.stakeHolder_Group.isProviderCustomer ? 'hide' : ''}`}>
										<div>
											<input
												onChange={(e) => handleChangeField(e,'isProviderCustomerGroup')}
												name="isDomestic"
												disabled={!formState.section2.stakeHolder_Group.isProviderCustomer}
												checked={formState.section2.stakeHolder_Group.isProviderCustomerGroup.isDomestic}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												นักท่องเที่ยวชาวไทย
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isProviderCustomer}
												onChange={(e) => handleChangeField(e,'isProviderCustomerGroup')}
												name="isForeigner"
												checked={formState.section2.stakeHolder_Group.isProviderCustomerGroup.isForeigner}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												นักท่องเที่ยวชาวต่างชาติ
											</label>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td colSpan={4}>
									<div>
										<input
											onChange={(e) => handleChangeField(e,'')}
											className="form-check-input"
											type="checkbox"
											name="isGovernmentAudit"
											checked={
												formState.section2.stakeHolder_Group.isGovernmentAudit
											}
											id="flexCheckChecked"
										/>
										<label
											style={{ marginLeft: "10px" }}
											className="form-check-label"
										>
											หน่วยงานกำกับดูแล/ผู้ถือหุ้นภาครัฐ
										</label>
									</div>
									<div className={`sub-selection ${!formState.section2.stakeHolder_Group.isGovernmentAudit ? 'hide' : ''}`}>
										<div>
											<input
												onChange={(e) => handleChangeField(e,'isGovernmentAuditGroup')}
												name="isMinistryFinance"
												checked={formState.section2.stakeHolder_Group.isGovernmentAuditGroup.isMinistryFinance}
												disabled={!formState.section2.stakeHolder_Group.isGovernmentAudit}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												กระทรวงการคลัง
											</label>
										</div>
										<div>
											<input
												onChange={(e) => handleChangeField(e,'isGovernmentAuditGroup')}
												name="isPolicyOffice"
												disabled={!formState.section2.stakeHolder_Group.isGovernmentAudit}
												checked={formState.section2.stakeHolder_Group.isGovernmentAuditGroup.isPolicyOffice}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												สำานักงานคณะกรรมการนโยบายรัฐวิสาหกิจ
											</label>
										</div>
										<div>
											<input
												onChange={(e) => handleChangeField(e,'isGovernmentAuditGroup')}
												name="isTourismAndSport"
												disabled={!formState.section2.stakeHolder_Group.isGovernmentAudit}
												checked={formState.section2.stakeHolder_Group.isGovernmentAuditGroup.isTourismAndSport}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												กระทรวงการท่องเที่ยวและกีฬา
											</label>
										</div>
										<div>
											<input
												onChange={(e) => handleChangeField(e,'isGovernmentAuditGroup')}
												name="isStateAudit"
												disabled={!formState.section2.stakeHolder_Group.isGovernmentAudit}
												checked={formState.section2.stakeHolder_Group.isGovernmentAuditGroup.isStateAudit}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												สำานักงานการตรวจเงินแผ่นดิน
											</label>
										</div>
										<div>
											<input
												onChange={(e) => handleChangeField(e,'isGovernmentAuditGroup')}
												name="isOther"
												disabled={!formState.section2.stakeHolder_Group.isGovernmentAudit}
												checked={formState.section2.stakeHolder_Group.isGovernmentAuditGroup.isOther}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												อื่นๆ
											</label>
											<input
												onChange={(e) => handleChangeField2(e,'isGovernmentAuditGroup')}
												name="isOtherText"
												value={formState.section2.stakeHolder_Group.isGovernmentAuditGroup.isOtherText} 
												style={{
												width: '200px',
												position: 'relative',
												left: '56px',
												height: '32px',
												top: '-19px'
											}} className="form-control" type='text' disabled={!formState.section2.stakeHolder_Group.isGovernmentAuditGroup.isOther}></input>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td colSpan={4}>
									<div>
										<input
											onChange={(e) => handleChangeField(e,'')}
											className="form-check-input"
											type="checkbox"
											name="isCustomer"
											checked={formState.section2.stakeHolder_Group.isCustomer}
											id="isCustomer"
										/>
										<label
											style={{ marginLeft: "10px" }}
											className="form-check-label"
										>
											คู่ค้า
										</label>
									</div>
									<div className={`sub-selection ${!formState.section2.stakeHolder_Group.isCustomer ? 'hide' : ''}`}>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isCustomer}
												onChange={(e) => handleChangeField(e,'isCustomerGroup')}
												name="isTourBusiness"
												checked={formState.section2.stakeHolder_Group.isCustomerGroup.isTourBusiness}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												ธุรกิจนำเที่ยว
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isCustomer}
												onChange={(e) => handleChangeField(e,'isCustomerGroup')}
												name="isOnlineTravelAgency"
												checked={formState.section2.stakeHolder_Group.isCustomerGroup.isOnlineTravelAgency}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												Online Travel Agency (ต่างประเทศและในประเทศ)
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isCustomer}
												onChange={(e) => handleChangeField(e,'isCustomerGroup')}
												name="isTravelAgency"
												checked={formState.section2.stakeHolder_Group.isCustomerGroup.isTravelAgency}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												ธุรกิจโรงแรมที่พัก
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isCustomer}
												onChange={(e) => handleChangeField(e,'isCustomerGroup')}
												name="isLogisticBusiness"
												checked={formState.section2.stakeHolder_Group.isCustomerGroup.isLogisticBusiness}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												ธุรกิจขนส่ง
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isCustomer}
												onChange={(e) => handleChangeField(e,'isCustomerGroup')}
												name="isRestaurantBusiness"
												checked={formState.section2.stakeHolder_Group.isCustomerGroup.isRestaurantBusiness}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												ธุรกิจร้านอาหาร
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isCustomer}
												onChange={(e) => handleChangeField(e,'isCustomerGroup')}
												name="isTourAreaBusiness"
												checked={formState.section2.stakeHolder_Group.isCustomerGroup.isTourAreaBusiness}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												แหล่งท่องเที่ยว/สถานประกอบการ/ชุมชนเจ้าของแหล่งท่องเที่ยว
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isCustomer}
												onChange={(e) => handleChangeField(e,'isCustomerGroup')}
												name="isOtherBusiness"
												checked={formState.section2.stakeHolder_Group.isCustomerGroup.isOtherBusiness}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												อื่นๆ
											</label>
											<input
												onChange={(e) => handleChangeField2(e,'isCustomerGroup')}
												name="isOtherText"
												value={formState.section2.stakeHolder_Group.isCustomerGroup.isOtherText} 
												style={{
												width: '200px',
												position: 'relative',
												left: '56px',
												height: '32px',
												top: '-19px'
											}} className="form-control" type='text' disabled={!formState.section2.stakeHolder_Group.isCustomerGroup.isOtherBusiness}></input>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td colSpan={4}>
									<div>
										<input
											onChange={(e) => handleChangeField(e,'')}
											className="form-check-input"
											type="checkbox"
											name="isSender"
											checked={formState.section2.stakeHolder_Group.isSender}
											id="flexCheckChecked"
										/>
										<label
											style={{ marginLeft: "10px" }}
											className="form-check-label"
										>
											ผู้ส่งมอบ
										</label>
									</div>
									<div className={`sub-selection ${!formState.section2.stakeHolder_Group.isSender ? 'hide' : ''}`}>
										<div>
											<div>
												<input
													disabled={!formState.section2.stakeHolder_Group.isSender}
													onChange={(e) => handleChangeField(e,'isSenderGroup')}
													name="isGovernmentSender"
													checked={formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSender}
													className="form-check-input"
													type="checkbox"
													id="flexCheckChecked"
												/>
												<label
													style={{ marginLeft: "10px" }}
													className="form-check-label"
												>
													ผู้ส่งมอบภาครัฐ
												</label>
											</div>
											<div className={`sub-selection ${!formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSender ? 'hide' : ''}`}>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSender}
														onChange={(e) => handleChangeField(e,'isGovernmentSenderGroup')}
														name="isMinistryOfInterior"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup.isMinistryOfInterior}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														กระทรวงมหาดไทย
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSender}
														onChange={(e) => handleChangeField(e,'isGovernmentSenderGroup')}
														name="isMinistryOfHealth"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup.isMinistryOfHealth}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														กระทรวงสาธารณสุข
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSender}
														onChange={(e) => handleChangeField(e,'isGovernmentSenderGroup')}
														name="isMinistryOfTour"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup.isMinistryOfTour}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														กรมการท่องเที่ยว
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSender}
														onChange={(e) => handleChangeField(e,'isGovernmentSenderGroup')}
														name="isMinistryOfForeign"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup.isMinistryOfForeign}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														กระทรวงต่างประเทศ
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSender}
														onChange={(e) => handleChangeField(e,'isGovernmentSenderGroup')}
														name="isMinistryOfTourAndSport"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup.isMinistryOfTourAndSport}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สำนักงานปลัดกระทรวงการท่องเที่ยวและกีฬา
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSender}
														onChange={(e) => handleChangeField(e,'isGovernmentSenderGroup')}
														name="isOther"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup.isOther}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														อื่นๆ
													</label>
													<input
														onChange={(e) => handleChangeField2(e,'isGovernmentSenderGroup')}
														name="isOtherText"
														value={formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup.isOtherText} 
														style={{
														width: '200px',
														position: 'relative',
														left: '56px',
														height: '32px',
														top: '-19px'
													}} className="form-control" type='text' disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isGovernmentSenderGroup.isOther}></input>
												</div>
											</div>
										</div>
										<div>
											<div>
												<input
													disabled={!formState.section2.stakeHolder_Group.isSender}
													onChange={(e) => handleChangeField(e,'isSenderGroup')}
													name="isPrivateSender"
													checked={formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSender}
													className="form-check-input"
													type="checkbox"
													id="flexCheckChecked"
												/>
												<label
													style={{ marginLeft: "10px" }}
													className="form-check-label"
												>
													ผู้ส่งมอบภาคเอกชน
												</label>
											</div>
											<div className={`sub-selection ${!formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSender ? 'hide' : ''}`}>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSender}
														onChange={(e) => handleChangeField(e,'isPrivateSenderGroup')}
														name="isEducationIns"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSenderGroup.isEducationIns}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สถาบันการศึกษา
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSender}
														onChange={(e) => handleChangeField(e,'isPrivateSenderGroup')}
														name="isResearchIns"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSenderGroup.isResearchIns}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														บริษัทวิจัย
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSender}
														onChange={(e) => handleChangeField(e,'isPrivateSenderGroup')}
														name="isConsultIns"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSenderGroup.isConsultIns}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														ที่ปรึกษา
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSender}
														onChange={(e) => handleChangeField(e,'isPrivateSenderGroup')}
														name="isOther"
														checked={formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSenderGroup.isOther}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														อื่นๆ
													</label>
													<input
														name="isOtherText" 
														style={{
														width: '200px',
														position: 'relative',
														left: '56px',
														height: '32px',
														top: '-19px'
													}} className="form-control" type='text' disabled={!formState.section2.stakeHolder_Group.isSenderGroup.isPrivateSenderGroup.isOther}></input>
												</div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td colSpan={4}>
									<div>
										<input
											onChange={(e) => handleChangeField(e,'')}
											className="form-check-input"
											type="checkbox"
											name="isWorkingUnit"
											checked={
												formState.section2.stakeHolder_Group.isWorkingUnit
											}
											id="isWorkingUnit"
										/>
										<label
											style={{ marginLeft: "10px" }}
											className="form-check-label"
										>
											คู่ความร่วมมือ
										</label>
									</div>
									<div className={`sub-selection ${!formState.section2.stakeHolder_Group.isWorkingUnit ? 'hide' : ''}`}>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
												onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
												name="isSpecialAreaManagement"
												checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isSpecialAreaManagement}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												องค์การบริหารการพัฒนาพื้นที่พิเศษเพื่อการท่องเที่ยวอย่างยั่งยืน
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
												onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
												name="isCofferenceOffice"
												checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isCofferenceOffice}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												สำนักงานส่งเสริมการจัดประชุมและนิทรรศการ
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
												onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
												name="isMassMediaOnlineOfline"
												checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isMassMediaOnlineOfline}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												สื่อมวลชนทั้ง Online และ Offline
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
												onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
												name="isAot"
												checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isAot}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												บริษัทท่าอากาศยานไทยจำกัด (มหาชน)
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
												onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
												name="isSport"
												checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isSport}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												การกีฬาแห่งประเทศไทย
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
												onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
												name="isTourismAndSport"
												checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAndSport}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												สำนักงานการท่องเที่ยวและกีฬา
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
												onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
												name="isLocalAdmin"
												checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isLocalAdmin}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												องค์การบริหารส่วนตำบล (อบต.)
											</label>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
												onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
												name="isProvinceAdmin"
												checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isProvinceAdmin}
												className="form-check-input"
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												องค์การบริหารส่วนจังหวัด (อบจ.)
											</label>
										</div>
										<div>
											<div>
												<input
													disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
													onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
													name="isTourismAsso"
													checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
													className="form-check-input"
													type="checkbox"
													id="flexCheckChecked"
												/>
												<label
													style={{ marginLeft: "10px" }}
													className="form-check-label"
												>
													สมาคมที่เกี่ยวข้องกับการท่องเที่ยว
												</label>
											</div>
											<div className={`sub-selection ${!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso ? 'hide' : ''}`}>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfguide"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfguide}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมมัคคุเทศก์อาชีพแห่งประเทศไทย
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfHotel"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfHotel}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมโรงแรมไทย
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfDomesticRestaurant"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfDomesticRestaurant}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมภัตตาคารไทย
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfRestaurant"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfRestaurant}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมผู้ประกอบการร้านอาหาร
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfDomesticTravel"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfDomesticTravel}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมผู้ประกอบการนำเที่ยวไทย
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfCommerce"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfCommerce}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สภาหอการค้าไทย
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfIndustry"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfIndustry}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สภาอุตสาหกรรมท่องเที่ยวแห่งประเทศไทย
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfRetailer"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfRetailer}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมผู้ค้าปลีกไทย
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfDomesticTourism"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfDomesticTourism}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมธุรกิจท่องเที่ยวภายในประเทศ
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isAssoOfTTA"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isAssoOfTTA}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมไทยธุรกิจการท่องเที่ยว (Association of Thai
														Travel Agents: ATTA)
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isPacificTravel"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isPacificTravel}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมส่งเสริมการท่องเที่ยวภูมิภาคเอเชียและแปซิฟิก
														(Pacific Asia Travel Association: PATA)
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isResponsibleTour"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isResponsibleTour}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														สมาคมไทยท่องเที่ยวอย่างรับผิดชอบ
													</label>
												</div>
												<div>
													<input
														disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAsso}
														onChange={(e) => handleChangeField(e,'isTourismAssoGroup')}
														name="isOtherAsso"
														checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isOtherAsso}
														className="form-check-input"
														type="checkbox"
														id="flexCheckChecked"
													/>
													<label
														style={{ marginLeft: "10px" }}
														className="form-check-label"
													>
														อื่นๆ
													</label>
													<input
														onChange={(e) => handleChangeField2(e,'isGovernmentAuditGroup')}
														name="isOtherText"
														value={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isOtherAssoText} 
														style={{
														width: '200px',
														position: 'relative',
														left: '56px',
														height: '32px',
														top: '-19px'
													}} className="form-control" type='text' disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isTourismAssoGroup.isOtherAsso}></input>
												</div>
											</div>
										</div>
										<div>
											<input
												disabled={!formState.section2.stakeHolder_Group.isWorkingUnit}
												onChange={(e) => handleChangeField(e,'isWorkingUnitGroup')}
												name="isOther"
												className="form-check-input"
												checked={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isOther}
												type="checkbox"
												id="flexCheckChecked"
											/>
											<label
												style={{ marginLeft: "10px" }}
												className="form-check-label"
											>
												อื่นๆ
											</label>
											<input
												onChange={(e) => handleChangeField2(e,'isWorkingUnitGroup')}
												name="isOtherText"
												value={formState.section2.stakeHolder_Group.isWorkingUnitGroup.isOtherText} 
												style={{
												width: '200px',
												position: 'relative',
												left: '56px',
												height: '32px',
												top: '-19px'
											}} className="form-control" type='text' disabled={!formState.section2.stakeHolder_Group.isWorkingUnitGroup.isOther}></input>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
