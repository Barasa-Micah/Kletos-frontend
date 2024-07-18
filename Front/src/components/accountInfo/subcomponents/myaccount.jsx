import React, { useState } from "react";

export default function MyAccount() {

    const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const locations = [
    "A.S.K. Showground/Wanye",
    "Adams Arcade / Dagoretti Corner",
    "Bahati / Marish / Viwandani / Jeri",
    "Bomas/CUEA/Galleria",
    "Buruburu / Hamza / Harambee",
    "CBD - GPO/City Market/Nation Centre",
    "CBD - KICC/Parliament/Kencom",
    "CBD - Luthuli/Afya Centre/ R. Ngala",
    "CBD - UON/Globe/Koja/River Road",
    "City Stadium/Makongeni/Mbotela",
    "Embakasi East-Pipeline/Transami/Airport North Rd",
    "Embakasi North - Dandora / Kariobangi North",
    "Embakasi South - Bunyala Road / South B",
    "Embakasi South - Mombasa Road/Sameer Park/General Motors/ICD",
    "Embakasi South-Landimawe/KwaReuben/Kware/Pipeline",
    "Garden Estate/Thome/Marurui",
    "Gigiri/Village market/UN",
    "Githurai/Kahawa Sukari",
    "Hurlingham/DOD/Yaya center",
    "Huruma / Kiamaiko / Mbatini / Ngei",
    "Imara Daima/AA/Maziwa/Kwa Njenga",
    "Kahawa Wendani/ Kenyatta University",
    "Kahawa west/Githurai 44",
    "Kamukunji - Airbase/Mlango Kubwa",
    "Kamukunji - Eastleigh/California/Shauri Moyo",
    "Kamulu",
    "Karen",
    "Kariobangi South/Dandora/Airbase",
    "Kawangware/Stage 56",
    "Kilimani/State House/Denis Pritt",
    "Kinoo/Zambezi/Ngecha",
    "Kiserian/Corner Baridi/Ongata Rongai",
    "Korogocho / Baraka / Gitathuru / Grogan",
    "Langata/Hardy/Mbagathi",
    "Lavington/Mziima/James Gichuru",
    "Muthaiga/Parklands",
    "Ngara/Pangani",
    "Ngong/Kibiku",
    "Nyayo Highrise/Nairobi West",
    "Roy Sambu/Kasarani",
    "Ruai",
    "Ruiru",
    "Runda/Estate/Muthaiga",
    "Rwaka/Two Rivers",
    "South C",
    "Thindigua/Kasarini",
    "Umoja/Infill",
    "Utawala",
    "Valley Road / Community / Kenyatta Hospital",
    "Waiyaki Way/Kangemi",
    "Westlands",
    "Ziwani/Zimmerman/Githurai 45"
  ];

  return (
    <div className="component-body">
      <Section title="Personal Details">
        <div className="contain">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="lbl">First Name</label>
            <InputField id="firstName" />
          </div>
          <div>
            <label className="lbl">Last Name</label>
            <InputField id="lastName" />
          </div>
        </div>
        <div>
          <label className="lbl">Email</label>
          <InputField id="email" type="email"/>
        </div>
        <div>
          <label className="lbl">Phone Number</label>
          <InputField id="phone" type="phone"/>
        </div>
        </div>
      </Section>
      <Section title="Account Password">
        {editMode ? (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="lbl">Old Password</label>
                <InputField id="oldPassword" type="password" />
              </div>
              <div>
                <label className="lbl">New Password</label>
                <InputField id="newPassword" type="password" />
              </div>
            </div>
            <div>
              <label className="lbl">Confirm Password</label>
              <InputField id="confirmPassword" type="password" />
            </div>
            <button className="button-outline small-button" onClick={toggleEditMode}>
              Save
            </button>
          </>
        ) : (
          <div>
            <label className="lbl">Password</label>
            <InputField id="password" type="password" />
            <button className="button-outline small-button" onClick={toggleEditMode}>
              Edit
            </button>
          </div>
        )}
      </Section>
      <Section title="Shipping Address">
        <div>
          <label className="lbl">Location</label>
          <SelectField id="location" options={locations} />
        </div>
      </Section>
      <Section title="Payment Information">
        <div>
          <label className="lbl">M-PESA Number</label>
          <InputField id="phone" />
        </div>
        <div className="available-payments">
          Current available payments : 
          <img src="/mpesa.png" className="mpesa-logo" alt="M-Pesa" width={70} height={50} />
        </div>
      </Section>
    </div>
  );
}

function PencilIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    );
  }

function Section({ title, children }) {
    return (
      <section>
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <button className="button-outline small-button">
            <PencilIcon className="pencil-icon" />
            Edit
          </button>
        </div>
        <div className="section-body">{children}</div>
      </section>
    );
  }
  
  function InputField({ label, id, type = "text"}) {
    return (
      <div className="inputField">
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} />
      </div>
    );
  }
  
  function SelectField({ id, options }) {
    return (
      <div className="select-field">
        <label htmlFor={id}></label>
        <select id={id}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }