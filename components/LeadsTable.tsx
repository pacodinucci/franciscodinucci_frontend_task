import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Lead } from "@/lib/types";
import { sofia } from "@/lib/fonts";
import ToggleSwitch from "./ui/toggle-switch";

const LeadsTable = () => {
  const reduxLeads = useSelector((state: RootState) => state.leads.leads);

  const [leadsState, setLeadsState] = useState<Lead[]>([]);
  const [errorsState, setErrorsState] = useState<Record<number, any>>({});
  const [showInvalidOnly, setShowInvalidOnly] = useState(false);

  useEffect(() => {
    console.log(leadsState);
  }, [leadsState]);

  const [errorsCount, setErrorsCount] = useState({
    name: 0,
    lastName: 0,
    companyDomain: 0,
    linkedinProfileUrl: 0,
  });

  useEffect(() => {
    setLeadsState(reduxLeads);
    const errors = validateAllLeads(reduxLeads);
    setErrorsState(errors);
    calculateErrorsCount(errors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduxLeads]);

  const validateAllLeads = (leads: Lead[]) => {
    const errors: Record<number, any> = {};
    leads.forEach((lead, index) => {
      errors[index] = validateLead(lead);
    });
    return errors;
  };

  const validateLead = (lead: Lead) => {
    let errors = {
      name: false,
      lastName: false,
      companyDomain: false,
      linkedinProfileUrl: false,
    };

    if (!lead.lastName) errors.lastName = true;
    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(lead.companyDomain))
      errors.companyDomain = true;
    if (
      !/^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/.test(lead.linkedinProfileUrl)
    )
      errors.linkedinProfileUrl = true;

    return errors;
  };

  const calculateErrorsCount = (errors: Record<number, any>) => {
    const errorCount = {
      name: 0,
      lastName: 0,
      companyDomain: 0,
      linkedinProfileUrl: 0,
    };

    Object.values(errors).forEach((error) => {
      if (error.name) errorCount.name += 1;
      if (error.lastName) errorCount.lastName += 1;
      if (error.companyDomain) errorCount.companyDomain += 1;
      if (error.linkedinProfileUrl) errorCount.linkedinProfileUrl += 1;
    });

    setErrorsCount(errorCount);
  };

  const handleInputChange = (
    index: number,
    field: keyof Lead,
    value: string
  ) => {
    const updatedLeads = [...leadsState];
    const updatedLead = { ...updatedLeads[index] };
    updatedLead[field] = value;
    updatedLeads[index] = updatedLead;
    setLeadsState(updatedLeads);

    const updatedErrors = { ...errorsState };
    updatedErrors[index] = validateLead(updatedLead);
    setErrorsState(updatedErrors);
    calculateErrorsCount(updatedErrors);
  };

  const totalErrors = Object.values(errorsState).reduce(
    (total, currentErrors) =>
      total + Object.values(currentErrors).filter((error) => error).length,
    0
  );

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg border border-gray-300">
        {/* Encabezado de la tabla */}
        <div
          className={`${sofia.className} py-2 px-4 flex justify-between items-center`}
        >
          <div>
            <h2 className="font-bold text-lg text-neutral-800">Edit Values</h2>
            <p className="text-neutral-500">
              Edit contacts and correct any invalid values.
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <div className="flex items-center">
              <ToggleSwitch
                checked={showInvalidOnly}
                onChange={setShowInvalidOnly}
              />
              <span className="ml-3 text-neutral-700 font-medium">
                Only show leads with invalid values.
              </span>
            </div>
            <span className="rounded-full px-2 py-1 bg-red-100 text-red-500 flex gap-x-1 items-center">
              <Image
                src="/close-circle.svg"
                alt="close circle icon"
                width={20}
                height={0}
                className="pb-1"
              />
              {totalErrors} Invalid Values
            </span>
            <span className="rounded-full px-3 py-2 bg-gray-200 text-gray-500 flex gap-x-1 items-center">
              <Image src="/people.svg" alt="people" width={20} height={0} />
              {reduxLeads.length} Leads Found
            </span>
          </div>
        </div>
        {/* Contenedor de la tabla con borde redondeado y altura máxima */}
        <div className="overflow-hidden rounded-b-lg max-h-[36rem] overflow-y-auto scrollbar-custom">
          <table className="min-w-full bg-white border-separate border-spacing-0">
            {/* Agregar las clases sticky y top-0 para el encabezado */}
            <thead
              className={`${sofia.className} uppercase text-neutral-700 sticky top-0 bg-white z-10`}
            >
              <tr>
                <th className="py-2 border border-gray-300 text-left w-[2%] bg-gray-100"></th>
                <th className="py-2 border border-gray-300 text-left px-4 w-[24%] bg-gray-100">
                  Name
                  {errorsCount.name > 0 && (
                    <span className="ml-2 text-red-500">
                      <Image
                        src="/close-circle.svg"
                        alt="error icon"
                        width={15}
                        height={0}
                      />
                      {errorsCount.name}
                    </span>
                  )}
                </th>
                <th className="py-2 border border-gray-300 text-left px-4 w-[24%] bg-gray-100">
                  Last Name
                  {errorsCount.lastName > 0 && (
                    <span className="ml-2 text-red-500">
                      <Image
                        src="/close-circle.svg"
                        alt="error icon"
                        width={15}
                        height={0}
                      />
                      {errorsCount.lastName}
                    </span>
                  )}
                </th>
                <th className="py-2 border border-gray-300 text-left px-4 w-[24%] bg-gray-100 relative">
                  Company Domain
                  {errorsCount.companyDomain > 0 && (
                    <span className="ml-2 text-red-400 absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-x-1 bg-red-100 rounded-full px-2">
                      <Image
                        src="/close-circle.svg"
                        alt="error icon"
                        width={15}
                        height={0}
                        className="mb-1"
                      />
                      {errorsCount.companyDomain}
                    </span>
                  )}
                </th>
                <th className="py-2 border border-gray-300 text-left px-4 w-[24%] bg-gray-100 relative">
                  LinkedIn Profile URL
                  {errorsCount.linkedinProfileUrl > 0 && (
                    <span className="ml-2 text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Image
                        src="/close-circle.svg"
                        alt="error icon"
                        width={15}
                        height={0}
                      />
                      {errorsCount.linkedinProfileUrl}
                    </span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody className={`${sofia.className} text-neutral-600`}>
              {leadsState.map((lead, index) => {
                const errors = errorsState[index];

                if (showInvalidOnly && !Object.values(errors).some((e) => e)) {
                  return null; // No mostrar filas sin errores si el filtro está activado
                }

                return (
                  <tr key={index}>
                    <td className="py-3 px-2 border border-gray-300 bg-gray-100">
                      {index + 1}
                    </td>
                    <td
                      className={`py-3 px-4 border relative ${
                        errors.name
                          ? "bg-red-50 border-red-300"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="text"
                        value={lead.name}
                        onChange={(e) =>
                          handleInputChange(index, "name", e.target.value)
                        }
                        className="w-full bg-transparent focus:outline-none"
                      />
                      {errors.name && (
                        <Image
                          src="/info-circle.svg"
                          alt="Error"
                          width={20}
                          height={0}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        />
                      )}
                    </td>
                    <td
                      className={`py-3 px-4 border relative ${
                        errors.lastName
                          ? "bg-red-50 border-red-300"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="text"
                        value={lead.lastName}
                        onChange={(e) =>
                          handleInputChange(index, "lastName", e.target.value)
                        }
                        className="w-full bg-transparent focus:outline-none"
                      />
                      {errors.lastName && (
                        <Image
                          src="/info-circle.svg"
                          alt="Error"
                          width={20}
                          height={0}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        />
                      )}
                    </td>
                    <td
                      className={`py-3 px-4 border relative ${
                        errors.companyDomain
                          ? "bg-red-50 border-red-300"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="text"
                        value={lead.companyDomain}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "companyDomain",
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent focus:outline-none"
                      />
                      {errors.companyDomain && (
                        <Image
                          src="/info-circle.svg"
                          alt="Error"
                          width={20}
                          height={0}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        />
                      )}
                    </td>
                    <td
                      className={`py-3 px-4 border relative ${
                        errors.linkedinProfileUrl
                          ? "bg-red-50 border-red-300"
                          : "border-gray-200"
                      }`}
                    >
                      <input
                        type="text"
                        value={lead.linkedinProfileUrl}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "linkedinProfileUrl",
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent focus:outline-none"
                      />
                      {errors.linkedinProfileUrl && (
                        <Image
                          src="/info-circle.svg"
                          alt="Error"
                          width={20}
                          height={0}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;
