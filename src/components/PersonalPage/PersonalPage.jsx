import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Pagination } from '@material-ui/lab';
import { getSchedule, getScheduleOnCurrentWeek } from '../../store/actions';
import './schedule.scss';

export const PersonalPage = () => {
  const dispatch = useDispatch();
  const schedule = useSelector((state) => state.scheduleState.table);
  const groupConstructor = useSelector((state) => state.signInUserState.infoAboutStudent);
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    const group = `КТ${groupConstructor?.levelLearn?.[0].toLowerCase()}о${groupConstructor?.grade}-${groupConstructor?.stGroup}`;
    dispatch(getSchedule(group));
  },
  [groupConstructor]);

  const handleWeeksChange = (event, page) => {
    const payload = {
      page,
      group: schedule?.table?.group,
    };
    dispatch(getScheduleOnCurrentWeek(payload));
  };

  useEffect(() => {
    setCurrentPage(schedule?.table?.week);
  }, [schedule]);

  return (
    <>
      <div className="weeks-wrapper">
        <Pagination
          boundaryCount={schedule?.weeks?.length || 1}
          count={schedule?.weeks?.length || 1}
          onChange={handleWeeksChange}
          page={currentPage || 1}
        />
      </div>
      <div className="schedule-table-wrapper">
        <Table className="schedule-table">
          <thead>
            <tr>
              {schedule?.table?.table[0].map((cell) => (
                <th key={Math.random()}>
                  {cell}
                </th>
              ))}
            </tr>
            <tr>
              {schedule?.table?.table[1].map((cell) => (
                <th key={Math.random()}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {schedule?.table?.table[2].map((cell) => (
                <td key={Math.random()}>{cell}</td>
              ))}
            </tr>
            <tr>
              {schedule?.table?.table[3].map((cell) => (
                <td key={Math.random()}>{cell}</td>
              ))}
            </tr>
            <tr>
              {schedule?.table?.table[4].map((cell) => (
                <td key={Math.random()}>{cell}</td>
              ))}
            </tr>
            <tr>
              {schedule?.table?.table[5].map((cell) => (
                <td key={Math.random()}>{cell}</td>
              ))}
            </tr>
            <tr>
              {schedule?.table?.table[6].map((cell) => (
                <td key={Math.random()}>{cell}</td>
              ))}
            </tr>
            <tr>
              {schedule?.table?.table[7].map((cell) => (
                <td key={Math.random()}>{cell}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
