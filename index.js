  // monthly interest rate       
  function mortgageCalculate(value) {
      var loanBalance = document.getElementById("mortgageLoan").value;
      var aprRate = document.getElementById("chargeAPR").value;
      var loanTerm = document.getElementById("loanTerm").value;
      var period = document.getElementById("period");
      var paymentPeriod = period.options[period.selectedIndex].text;
      //Could not get period variable to accept document.getElementById("period").value; came back as undefined. However, some people could.


      // TO GET MONTHLY INTEREST RATES - LOGS TO CONSOLE
      var monthlyInterestRate = (aprRate / 100) / paymentPeriod;
      console.log(monthlyInterestRate);


      //TO GET THE NUMBER OF PAYMENTS TOTAL IN TERM - LOGS TO CONSOLE
      var numberOfPayments = loanTerm * paymentPeriod;
      console.log(numberOfPayments);

      //TO GET COMPOUND INTEREST RATE logs to console
      var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
      console.log(compoundedInterestRate);

      // interest quotient
      var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
      console.log(interestQuotient);

      // monthly Payment
      var monthlyPayment = loanBalance * interestQuotient;
      console.log(monthlyPayment);

      var totalPayment = monthlyPayment * numberOfPayments;
      console.log(totalPayment);


      var printValue = "You pay $" + monthlyPayment.toFixed(2) + " per payment-period on your loan.";
      document.getElementById("displayOutput").innerHTML = printValue;

      var printTotal = "You will end up paying $" + totalPayment.toFixed(2) + " by the end of your loan term."
      document.getElementById("displayTotal").innerHTML = printTotal;

  }











  // function myPaymentReset()
  // {
  // // Reset everything to default/null/blank
  // document.getElementById('monthlyPayment').innerHTML = 'Values reset';
  // document.getElementById('friendlyReminder').style.display = 'none';
  // document.getElementById('loanError').innerHTML = '';
  // document.getElementById('yearsError').innerHTML = '';
  // document.getElementById('rateError').innerHTML = '';
  // document.mortgagecalc.loan.value = null;
  // document.mortgagecalc.years.value = null;
  // document.mortgagecalc.rate.value = null;
  // }
