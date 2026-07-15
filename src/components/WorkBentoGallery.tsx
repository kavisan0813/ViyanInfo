import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

// Concept images for bento grid
import erpImg from "../assets/work_erp_real.png";
import inventoryImg from "../assets/work_inventory_real.png";
import pharmacyImg from "../assets/work_pharmacy_real.png";
import billingImg from "../assets/work_billing_real.webp";
import employmentImg from "../assets/work_ems_real.png";
import crmImg from "../assets/work_crm_real.png";
import aiImg from "../assets/work_ai_real.png";
import trainingImg from "../assets/work_training_real.png";

const bentoItems = [
  { id: "erp", title: "Enterprise ERP", tag: "Enterprise", image: erpImg, area: "erp", delay: 0.1 },
  { id: "inv", title: "Inventory System", tag: "Logistics", image: inventoryImg, area: "inv", delay: 0.2 },
  { id: "med", title: "MedAssist", tag: "Healthcare", image: pharmacyImg, area: "med", delay: 0.3 },
  { id: "bill", title: "Billing & POS", tag: "Retail", image: billingImg, area: "bill", delay: 0.4 },
  { id: "crm", title: "Viyan CRM", tag: "SaaS", image: crmImg, area: "crm", delay: 0.1 },
  { id: "emp", title: "Employment System", tag: "HR Tech", image: employmentImg, area: "emp", delay: 0.2 },
  { id: "ai", title: "AI Dashboard", tag: "AI / ML", image: aiImg, area: "ai", delay: 0.3 },
  { id: "train", title: "Training Portal", tag: "EdTech", image: trainingImg, area: "train", delay: 0.4 },
];

export function WorkBentoGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="work-bento" ref={ref}>
      <div className="work-bento__container">
        <div className="work-bento__header">
          <motion.h2
            className="work-bento__heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            Project{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Gallery
            </span>
          </motion.h2>
          <motion.p
            className="work-bento__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Explore our curated selection of flagship products, designed with modern aesthetics and robust architecture.
          </motion.p>
        </div>

        <div className="work-bento__grid">
          {bentoItems.map((item) => (
            <motion.div
              key={item.id}
              className={`work-bento__tile work-bento__tile--${item.area}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
            >
              <img src={item.image} alt={item.title} className="work-bento__tile-img" loading="lazy" />
              <div className="work-bento__tile-overlay">
                <span className="work-bento__tile-tag">
                  <Sparkles size={8} style={{ display: "inline", marginRight: 4 }} />
                  {item.tag}
                </span>
                <h3 className="work-bento__tile-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
