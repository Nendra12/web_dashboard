import React from "react";

const loans = [
  {
    sl: "01.",
    loanMoney: 100000,
    leftToRepay: 40500,
    duration: "8 Months",
    interestRate: "12%",
    installment: 2000,
    active: true,
  },
  {
    sl: "02.",
    loanMoney: 500000,
    leftToRepay: 250000,
    duration: "36 Months",
    interestRate: "10%",
    installment: 8000,
  },
  {
    sl: "03.",
    loanMoney: 900000,
    leftToRepay: 40500,
    duration: "12 Months",
    interestRate: "12%",
    installment: 5000,
  },
  {
    sl: "04.",
    loanMoney: 50000,
    leftToRepay: 40500,
    duration: "25 Months",
    interestRate: "5%",
    installment: 2000,
  },
  {
    sl: "05.",
    loanMoney: 50000,
    leftToRepay: 40500,
    duration: "5 Months",
    interestRate: "16%",
    installment: 10000,
  },
  {
    sl: "06.",
    loanMoney: 80000,
    leftToRepay: 25500,
    duration: "14 Months",
    interestRate: "8%",
    installment: 2000,
  },
  {
    sl: "07.",
    loanMoney: 12000,
    leftToRepay: 5500,
    duration: "9 Months",
    interestRate: "13%",
    installment: 500,
  },
  {
    sl: "08.",
    loanMoney: 160000,
    leftToRepay: 100800,
    duration: "3 Months",
    interestRate: "12%",
    installment: 900,
  },
];

const fmtMoney = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export default function ActiveLoans() {
  const totalLoanMoney = loans.reduce((acc, x) => acc + x.loanMoney, 0);
  const totalLeft = loans.reduce((acc, x) => acc + x.leftToRepay, 0);
  const totalInstallment = loans.reduce((acc, x) => acc + x.installment, 0);

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-black/5 px-[30px]">
        <table className="min-w-[880px] w-full ">
          <thead>
            <tr className="text-left text-[16px] font-medium text-primary3">
              <th className="px-6 pt-5 pb-4">SL No</th>
              <th className="px-6 pt-5 pb-4">Loan Money</th>
              <th className="px-6 pt-5 pb-4">Left to repay</th>
              <th className="px-6 pt-5 pb-4">Duration</th>
              <th className="px-6 pt-5 pb-4">Interest rate</th>
              <th className="px-6 pt-5 pb-4">Installment</th>
              <th className="px-6 pt-5 pb-4">Repay</th>
            </tr>
          </thead>

          <tbody className="text-[16px] text-[#232323]">
            {loans.map((row) => (
              <tr key={row.sl} className="border-t border-[#E6EFF5]">
                <td className="px-6 py-4">{row.sl}</td>
                <td className="px-6 py-4 font-medium text-slate-800">
                  {fmtMoney(row.loanMoney)}
                </td>
                <td className="px-6 py-4">{fmtMoney(row.leftToRepay)}</td>
                <td className="px-6 py-4">{row.duration}</td>
                <td className="px-6 py-4">{row.interestRate}</td>
                <td className="px-6 py-4">
                  {fmtMoney(row.installment)}{" "}/ month
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end">
                    <button
                      className={[
                        "h-9 px-6 rounded-full text-[15px] font-medium transition",
                        "bg-white border",
                        row.active
                          ? "border-[#1814F3] text-[#1814F3]"
                          : "border-[#232323] text-[#232323] hover:border-[#1814F3] hover:text-[#1814F3]",
                        "focus:outline-none focus-visible:ring-4 cursor-pointer",
                      ].join(" ")}
                      type="button"
                    >
                      Repay
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* Total row */}
            <tr className="border-t border-[#E6EFF5]">
              <td className="px-6 py-5 text-[16px] font-medium text-secondery">
                Total
              </td>
              <td className="px-6 py-5 text-[16px] font-medium text-secondery">
                {fmtMoney(totalLoanMoney)}
              </td>
              <td className="px-6 py-5 text-[16px] font-medium text-secondery">
                {fmtMoney(totalLeft)}
              </td>
              <td className="px-6 py-5" />
              <td className="px-6 py-5" />
              <td className="px-6 py-5 text-[16px] font-medium text-secondery">
                {fmtMoney(totalInstallment)}{" "}/ month
              </td>
              <td className="px-6 py-5" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
