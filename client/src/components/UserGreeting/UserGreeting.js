import React from "react";
import { connect } from "react-redux";
import styles from "./UserGreeting.module.sass";

const UserGreeting = (props) => {
  const { data } = props;
  const { firstName, lastName, role } = data;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.info}>This is the List of your expences:</div>
        <div className={styles.infoBlock}>
          <span
            className={styles.info}
          >{`Dear ${firstName}   ${lastName}`}</span>
        </div>
        <div className={styles.infoBlock}>
          <span className={styles.label}>Role</span>
          <span className={styles.info}>{role}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { data } = state.userStore;
  return { data };
};

export default connect(mapStateToProps)(UserGreeting);
