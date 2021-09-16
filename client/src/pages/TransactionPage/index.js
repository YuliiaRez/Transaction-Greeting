import { connect } from "react-redux";
import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserGreeting from "../../components/UserGreeting/UserGreeting";
import styles from "./TransactionPage.module.sass";
import TransactionTable from "./TransactionTable";
import { getTransactionsAction } from "../../actions/actionCreator";

// const transactions = [
//   { id: 1, date: "2021-08-31", operationType: "EXPENSE", amount: 10 },
//   { id: 2, date: "2021-09-01", operationType: "EXPENSE", amount: 20 },
//   { id: 3, date: "2021-09-04", o perationType: "EXPENSE", amount: 40 },
// ];

function TransactionPage(props) {
  const { isFetching, error, transactions, getTransactions } = props;
  console.log(`transactionsMain`, transactions);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <>
      <Header />
      <UserGreeting />
      <section className={styles.transactionTableContainer}>
        <TransactionTable transactions={transactions} />
      </section>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => state.transaction;
const mapDispatchToProps = (dispatch) => ({
  getTransactions: () => dispatch(getTransactionsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
