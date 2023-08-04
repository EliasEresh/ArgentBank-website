import React from 'react';
import PropTypes from 'prop-types';

const accountsData = [
    {
        "id": 1,
        "title": "Argent Bank Checking (x8349)",
        "amount": "$2,082.79",
        "description": "Available Balance"
    },
    {
        "id": 2,
        "title": "Argent Bank Savings (x6712)",
        "amount": "$10,928.42",
        "description": "Available Balance"
    },
    {
        "id": 3,
        "title": "Argent Bank Credit Card (x8349)",
        "amount": "$184.30",
        "description": "Available Balance"
    }
];

function Accounts() {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accountsData.map((account) => (
        <Compte
          key={account.id}
          titre={account.title}
          montant={account.amount}
          description={account.description}
        />
      ))}
    </>
  );
}

function Compte({ titre, montant, description }) {
  return (
    <section className="compte">
      <div>
        <h3>{titre}</h3>
        <p className="compte-montant">{montant}</p>
        <p className="compte-description">{description}</p>
      </div>
      <div className="cta">
        <button>View transactions</button>
      </div>
    </section>
  );
}

Compte.propTypes = {
  titre: PropTypes.string.isRequired,
  montant: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Accounts;
