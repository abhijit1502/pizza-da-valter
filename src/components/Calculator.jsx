import React, { useEffect, useState } from 'react';
import GBP from '../assets/img/flags/gbp.png';
import axios from 'axios';


function Calculator() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('5'); // Default selected country is India
  const [selectedBranchId, setSelectedBranchId] = useState('2'); // Set a default branch
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState('100.00');
  const [rate, setRate] = useState('');
  const [currencyCode, setCurrencyCode] = useState('');
  const [fees, setFees] = useState('');
  const [calculatedAmount, setCalculatedAmount] = useState(amount * rate || '');
  const [userEnteredAmount, setUserEnteredAmount] = useState(amount);
  const [collectionTypes, setCollectionTypes] = useState([]);
  const [selectedCollectionType, setSelectedCollectionType] = useState('');
  const [deliveryTypes, setDeliveryTypes] = useState([]);
  const [selectedDeliveryType, setSelectedDeliveryType] = useState('');
  const filteredCountries = countries.filter(
    (country) => country.countryID === 5 || country.countryID === 2 /* ID for Sri Lanka add contery */
  );
  useEffect(() => {
    axios
      .post('/api/checkrateslistcountry/checklistcountry', {
        clientID: '1',
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setCountries(response.data.data);
          const defaultCountryDetails = response.data.data.find(
            (country) => country.countryID === parseInt(selectedCountry.toString(), 10)
          );
          setSelectedCountryDetails(defaultCountryDetails);
        }
      })
      .catch((error) => {
        // Handle error
      });
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedBranchId) {
      axios
        .post('/api/currency/currencylist', {
          countryID: selectedCountry.toString(),
          clientID: '1',
        })
        .then((response) => {
          if (response.data.response && response.data.data) {
            setCurrencyList(response.data.data);
            const firstCurrency = response.data.data[0];
            if (firstCurrency) {
              setCurrencyCode(firstCurrency.currencyCode);
            }
          }
        })
        .catch((error) => {
          // Handle error
        });
    }
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    if (amount && selectedCountry && currencyCode) {
      axios
        .post('/api/checkrateslistcountry/checkrateslistcountry', {
          clientID: '1',
          countryID: selectedCountry.toString(),
          paymentTypeID: '2',
          paymentDepositTypeID: selectedCollectionType.toString(),
          deliveryTypeID: selectedDeliveryType.toString(),
          transferAmount: true,
          amount: userEnteredAmount,
          currencyCode: currencyCode,
        })
        .then((response) => {
          if (response.data.response && response.data.data && response.data.data.length > 0) {
            const rateData = response.data.data[0];
            const rateValue = rateData.rate;

            if (rateValue) {
              setRate(rateValue);
              setFees(rateData.transferFeesGBP);
              setCalculatedAmount(userEnteredAmount * rateValue || '');
            } else {
              // Handle error or no rate value
            }
          } else {
            // Handle no rate data
          }
        })
        .catch((error) => {
          // Handle error
        });
    }
  }, [userEnteredAmount, selectedCountry, currencyCode, selectedCollectionType, selectedDeliveryType]);

  useEffect(() => {
    axios
      .post('/api/collection/getcollectiontype', {
        clientID: '1',
        branchID: selectedBranchId,
        countryID: selectedCountry.toString(),
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setCollectionTypes(response.data.data);
          const defaultCollectionType = response.data.data[0];
          if (defaultCollectionType) {
            setSelectedCollectionType(defaultCollectionType.paymentDepositetypeID.toString());
          }
        }
      })
      .catch((error) => {
        // Handle error
      });
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    axios
      .post('/api/deliverytype/getdeliverytype', {
        clientID: '1',
        branchID: selectedBranchId,
        countryID: selectedCountry.toString(),
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setDeliveryTypes(response.data.data);
          const defaultDeliveryType = response.data.data[0];
          if (defaultDeliveryType) {
            setSelectedDeliveryType(defaultDeliveryType.deliveryTypeID.toString());
          }
        }
      })
      .catch((error) => {
        // Handle error
      });
  }, [selectedCountry, selectedBranchId]);

  const handleCountryChange = (event) => {
    const selectedCountryId = event.target.value;
    setSelectedCountry(selectedCountryId);
  };

  const handleCalculatedAmountChange = (event) => {
    const newCalculatedAmount = event.target.value;

    setCalculatedAmount(newCalculatedAmount);
    setUserEnteredAmount(newCalculatedAmount / rate || '');
    setAmount(newCalculatedAmount / rate || '0');
  };

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;

    const cleanedAmount = newAmount.replace(/^0+/, '');

    if (cleanedAmount !== '' && cleanedAmount !== '0') {
      if (cleanedAmount.length <= 5) {
        setAmount(cleanedAmount);
        setUserEnteredAmount(cleanedAmount);

        axios
          .post('/api/checkrateslistcountry/checkrateslistcountry', {
            clientID: '1',
            countryID: selectedCountry.toString(),
            paymentTypeID: '2',
            paymentDepositTypeID: selectedCollectionType.toString(),
            deliveryTypeID: selectedDeliveryType.toString(),
            transferAmount: true,
            amount: cleanedAmount,
            currencyCode: currencyCode,
          })
          .then((response) => {
            if (response.data.response && response.data.data && response.data.data.length > 0) {
              const rateData = response.data.data[0];
              const rateValue = rateData.rate;

              if (rateValue) {
                setRate(rateValue);
                setFees(rateData.transferFeesGBP);
                setCalculatedAmount(cleanedAmount * rateValue || '');
              } else {
                // Handle
                // Handle error or no rate value
              }
            } else {
              // Handle no rate data
            }
          })
          .catch((error) => {
            // Handle error
          });
      } else {
        setAmount('0');
        setUserEnteredAmount('0');
        setRate('0');
        setFees('0');
        setCalculatedAmount('0');
      }
    } else {
      setAmount('0');
      setUserEnteredAmount('0');
      setRate('0');
      setFees('0');
      setCalculatedAmount('0');
    }
  };

  const handleCollectionTypeChange = (event) => {
    const selectedCollectionType = event.target.value;
    setSelectedCollectionType(selectedCollectionType);
  };

  const handleDeliveryTypeChange = (event) => {
    const selectedDeliveryType = event.target.value;
    setSelectedDeliveryType(selectedDeliveryType);
  };
  return (
    <div>
      <form className="calculator">
        <div className="mb-2">
          <label htmlFor="youSend" className="fs-6 text-dark font--medium mb-1">Select Country:</label>
          <div className="input-group">
            <select label="Select Country"
              value={selectedCountry.toString()}
              onChange={handleCountryChange} className="form-control form-control2 sendingcurrency" required>
              {filteredCountries.map((country) => (
                <option key={country.countryID} value={country.countryID} name={country.countryName}>
                  <img src={country.countryFlag} alt={country.countryName} className="icon-dropdown" />
                  {country.countryName}
                </option>
              ))}
            </select>
            <span className="input-group-text ">
              {/* <img className="flag" src={AFN} /> */}

              {selectedCountryDetails && (
                <img src={selectedCountryDetails.countryFlag} alt={selectedCountryDetails.countryName} className="flag" />
              )}
            </span>
          </div>
        </div>
        <div className="input_container d-none">
          <label className="input_label" htmlFor="collection_type_field">
            Collection Type
          </label>

          <select
            label="Collection Type"
            value={selectedCollectionType}
            onChange={handleCollectionTypeChange}
            className="input_select"
          >
            {collectionTypes.map((collectionType) => (
              <option key={collectionType.paymentDepositetypeID} value={collectionType.paymentDepositetypeID}>
                {collectionType.typeName}
              </option>
            ))}
          </select>
        </div>

        <div className="input_container d-none">
          <label className="input_label" htmlFor="delivery_type_field">
            Delivery Type
          </label>

          <select
            label="Delivery Type"
            value={selectedDeliveryType}
            onChange={handleDeliveryTypeChange}
            className="input_select"
          >
            {deliveryTypes.map((deliveryType) => (
              <option key={deliveryType.deliveryTypeID} value={deliveryType.deliveryTypeID}>
                {deliveryType.deliveryType}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="youSend" className="fs-6 text-dark font--medium mb-1">Send Amount:</label>
          <div className="input-group">
            {/* <input type="text" className="form-control" data-bv-field="youSendAmount" defaultValue={100.00} placeholder /> */}
            <input
              id="amount_field"
              title="Input title"
              type="text"
              className="form-control"
              data-bv-field="youSendAmount"
              value={amount === '' ? '0' : amount.toLocaleString()}
              onChange={handleAmountChange}
            />
            <span className="input-group-text">
              <img className="flag mr-1" src={GBP} /><span className="mr-2" style={{ fontWeight: 600 }}>GBP</span>
            </span>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="recipientGets" className="fs-6 text-dark font--medium mb-1">Receive Amount:</label>
          <div className="input-group">
            {/* <input type="text" className="form-control" data-bv-field="recipientGets" defaultValue="10,835.05" placeholder /> */}
            <input
              id="calculated_amount"
              title="Input title"
              type="text"
              className="form-control"
              data-bv-field="recipientGets"
              value={
                calculatedAmount === ''
                  ? '0'
                  : parseFloat(calculatedAmount).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
              }
              onChange={handleCalculatedAmountChange}
            />
            <span className="input-group-text">
              {/* <img className="flag mr-1" src={AFN} /> */}
              {selectedCountryDetails && (
                <img src={selectedCountryDetails.countryFlag} alt={selectedCountryDetails.countryName} className="flag mr-1" />
              )}
              <span>
                <select className="form-control form-control3 bg-transparent" required>
                  <option value="afn">{currencyCode}</option>
                </select>

                {/* <select label="Select Country"
            value={selectedCountry.toString()}
            onChange={handleCountryChange} className="form-control form-control3 bg-transparent" required>
                            {filteredCountries.map((country) => (
              <option key={country.countryID} value={country.countryID} name={country.currencyCode}>
                <img src={country.countryFlag} alt={country.currencyCode} className="icon-dropdown" />
                {country.currencyCode}
              </option>
            ))}
                          </select> */}
              </span>
            </span>
          </div>
        </div>
        {/* <div className="mb-2">
          <label htmlFor="youSend" className="fs-6 text-dark font--medium mb-1">Delivery Options:</label>
          <div className="input-group">
            <select className="form-control form-control2 bg-transparent" required>
              <option value="Cash Pickup">Cash Pickup</option>
              <option value="Bank to Bank">Bank to Bank</option>
              <option value="E-Wallet">E-Wallet</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="youSend" className="fs-6 text-dark font--medium mb-1">Mode of Payment:</label>
          <div className="input-group">
            <select className="form-control form-control2 bg-transparent" required>
              <option value="Bank to Bank">Bank to Bank</option>
            </select>
          </div>
        </div> */}
        <p className="text-muted mb-0">Current exchange rate: <span className="fw-500">{rate} {currencyCode}</span></p>
        <p className="text-muted mb-1">Transfer Fees: <span className="fw-500">GBP {fees}</span></p>
        <div className="d-grid mt-3"><button className="btn btn-Continue font--medium">Continue</button></div>
      </form>
    </div>
  )
}

export default Calculator
