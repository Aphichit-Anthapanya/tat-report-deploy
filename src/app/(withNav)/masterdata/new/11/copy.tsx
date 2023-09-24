import React, { useState } from 'react';
import "@components/Report-temp/report-temp.scss";

const Table = ({ data }: any) => {
  const [visibleLevels, setVisibleLevels] = useState(new Set<any>());

  const toggleLevel = (level: any) => {
    const newVisibleLevels = new Set(visibleLevels);
    console.log(level)
    if (newVisibleLevels.has(level)) {
      newVisibleLevels.delete(level);
      data.map((level1UserItem: any, level1UserIndex: number) => {
      if (level == `level1_${level1UserItem.userGroup}_${level1UserIndex}`) {
        console.log('check!')
          data.map((level1UserItem: any,) => {
            console.log(level1UserItem)
            level1UserItem.level2User?.map((level2UserItem: any, level2UserIndex: any) => {
              newVisibleLevels.delete(`level2_${level2UserItem.userGroup}_${level2UserIndex}`);
            })
          });
      } else if (level === 2) {
        data[level]?.level3User?.forEach((level3UserItem: any) => {
          newVisibleLevels.delete(level3UserItem.index);
        });
      }})
    } else {
      newVisibleLevels.add(level);
    }

    setVisibleLevels(newVisibleLevels);
  };

  return (
    <>
      {data.map((level1Item: any, level1Index: any) => (
        <React.Fragment key={level1Index}>
          <tr>
            <th>
                <div className="normalText d-flex justify-content-center align-items-center">
                    <button className="open-button icon-button bi bi-pencil"></button>
                </div>
            </th>
            <th>
                <div className="normalText d-flex justify-content-center align-items-center">
                    <button className="open-button icon-button bi bi-trash"></button>
                </div>
            </th>
            <th>
              <div className="normalText d-flex justify-content-center align-items-center">
                <button
                  className="open-button icon-button bi bi-file-earmark-text-fill"
                  onClick={() => toggleLevel(`level1_${level1Item.userGroup}_${level1Index}`)}
                ></button>
              </div>
            </th>
            <th className="table-success">
                <div className="normalText d-flex justify-content-left align-items-center">{level1Item.userGroup}</div>
            </th>
            <th>
                <div className="normalText d-flex justify-content-center align-items-center">{level1Item.note}</div>
            </th>
          </tr>
          {level1Item.level2User?.map((level2UserItem: any, level2UserIndex: any) => (
            <React.Fragment key={level2UserIndex}>
              {visibleLevels.has(`level1_${level1Item.userGroup}_${level1Index}`) && (
                <tr>
                  <th>
                      <div className="normalText d-flex justify-content-center align-items-center">
                          <button className="open-button icon-button bi bi-pencil"></button>
                      </div>
                  </th>
                  <th>
                      <div className="normalText d-flex justify-content-center align-items-center">
                          <button className="open-button icon-button bi bi-trash"></button>
                      </div>
                  </th>
                  <th>
                    <div className="normalText d-flex justify-content-center align-items-center">
                      <button
                        className="open-button icon-button bi bi-file-earmark-text-fill"
                        onClick={() => toggleLevel(`level2_${level2UserItem.userGroup}_${level2UserIndex}`)}
                      ></button>
                    </div>
                  </th>
                  <th  className="table-warning">
                      <div className="ml-10 normalText d-flex justify-content-left align-items-center">{level2UserItem.userGroup}</div>
                  </th>
                  <th>
                      <div className="normalText d-flex justify-content-center align-items-center">{level2UserItem.note}</div>
                  </th>
                </tr>
              )}
              {level2UserItem.level3User?.map((level3UserItem: any, level3UserIndex: any) => (
                <React.Fragment key={level3UserIndex}>
                  {visibleLevels.has(`level2_${level2UserItem.userGroup}_${level2UserIndex}`) && (
                    <tr>
                      <th>
                          <div className="normalText d-flex justify-content-center align-items-center">
                              <button className="open-button icon-button bi bi-pencil"></button>
                          </div>
                      </th>
                      <th>
                          <div className="normalText d-flex justify-content-center align-items-center">
                              <button className="open-button icon-button bi bi-trash"></button>
                          </div>
                      </th>
                      <th>
                          <div className="normalText d-flex justify-content-center align-items-center">
                          </div>
                      </th>
                      <th>
                          <div className="normalText d-flex justify-content-left align-items-center">{level3UserItem.userGroup}</div>
                      </th>
                      <th>
                          <div className="normalText d-flex justify-content-center align-items-center">{level3UserItem.note}</div>
                      </th>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default Table;

