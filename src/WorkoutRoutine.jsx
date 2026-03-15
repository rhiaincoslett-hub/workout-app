import { useState } from "react";

const days = [
  {
    day: "Monday",
    label: "MON",
    type: "Squash + Active Recovery",
    tag: "SPORT",
    tagColor: "#f97316",
    intensity: "High",
    focus: "Squash Match + Light Movement",
    cardio: "Squash counts as cardio — skip the walk or do 10 min easy cool-down stroll",
    exercises: [
      { name: "Squash Session", sets: "1", reps: "45–60 min", note: "Main activity" },
      { name: "Dynamic Warm-Up", sets: "1", reps: "5 min", note: "Leg swings, hip circles, arm rotations before play" },
      { name: "Post-Game Stretch", sets: "1", reps: "10 min", note: "Focus on hip flexors, hamstrings, calves" },
    ],
    core: false,
    coreNote: null,
    tip: "Squash is high-intensity — treat Monday as your HIIT day. Save your energy for the court.",
  },
  {
    day: "Tuesday",
    label: "TUE",
    type: "Upper Body Push",
    tag: "STRENGTH",
    tagColor: "#3b82f6",
    intensity: "Moderate–High",
    focus: "Chest, Shoulders, Triceps",
    cardio: "20–30 min steady-state walk post-workout",
    exercises: [
      { name: "Bench Press / Push-Up Progression", sets: "4", reps: "8–12", note: "Control the descent" },
      { name: "Overhead Dumbbell Press", sets: "3", reps: "10–12", note: "Keep core engaged" },
      { name: "Incline Dumbbell Flye", sets: "3", reps: "12–15", note: "Stretch at the bottom" },
      { name: "Lateral Raises", sets: "3", reps: "15", note: "Light weight, full range" },
      { name: "Tricep Dips / Overhead Extension", sets: "3", reps: "10–12", note: "" },
    ],
    core: false,
    coreNote: null,
    tip: "Pair this with Tuesday's energy — you've had one recovery day after squash.",
  },
  {
    day: "Wednesday",
    label: "WED",
    type: "Lower Body",
    tag: "STRENGTH",
    tagColor: "#3b82f6",
    intensity: "High",
    focus: "Quads, Hamstrings, Glutes",
    cardio: "20–30 min steady-state walk — this IS your warm-up today",
    exercises: [
      { name: "Barbell Squat / Goblet Squat", sets: "4", reps: "8–10", note: "Drive through heels" },
      { name: "Romanian Deadlift", sets: "3", reps: "10–12", note: "Hinge, don't squat" },
      { name: "Walking Lunges", sets: "3", reps: "12 each", note: "Great for squash hip stability" },
      { name: "Leg Press", sets: "3", reps: "12–15", note: "" },
      { name: "Seated Leg Curl", sets: "3", reps: "12", note: "" },
      { name: "Calf Raises", sets: "3", reps: "20", note: "Important for squash court movement" },
    ],
    core: false,
    coreNote: null,
    tip: "Strong legs = better squash. This is your most important training day for the court.",
  },
  {
    day: "Thursday",
    label: "THU",
    type: "Upper Body Pull + Core",
    tag: "STRENGTH + CORE",
    tagColor: "#8b5cf6",
    intensity: "Moderate",
    focus: "Back, Biceps + Core",
    cardio: "20–30 min steady-state walk",
    exercises: [
      { name: "Pull-Ups / Lat Pulldown", sets: "4", reps: "8–10", note: "Full range of motion" },
      { name: "Seated Cable Row / Dumbbell Row", sets: "3", reps: "10–12", note: "Squeeze at the top" },
      { name: "Face Pulls", sets: "3", reps: "15–20", note: "Great for shoulder health" },
      { name: "Dumbbell Bicep Curl", sets: "3", reps: "12", note: "" },
      { name: "Hammer Curls", sets: "2", reps: "12", note: "" },
    ],
    core: true,
    coreNote: "Core Finisher (10–12 min)",
    coreExercises: [
      { name: "Dead Bug", sets: "3", reps: "10 each side" },
      { name: "Plank Hold", sets: "3", reps: "30–45 sec" },
      { name: "Cable/Band Woodchop", sets: "3", reps: "12 each" },
      { name: "Hollow Body Hold", sets: "2", reps: "20–30 sec" },
    ],
    tip: "Cable woodchops mimic the rotational demand of squash. Prioritize them.",
  },
  {
    day: "Friday",
    label: "FRI",
    type: "Full Body Light + Core",
    tag: "LIGHT + CORE",
    tagColor: "#10b981",
    intensity: "Low–Moderate",
    focus: "Mobility, Stability, Core",
    cardio: "20–30 min steady-state walk — leisurely pace, enjoy it",
    exercises: [
      { name: "Goblet Squat (Light)", sets: "3", reps: "15", note: "Focus on depth and posture" },
      { name: "Single-Leg Deadlift", sets: "3", reps: "10 each", note: "Balance + posterior chain" },
      { name: "TRX / Ring Row", sets: "3", reps: "12", note: "Or resistance band row" },
      { name: "Dumbbell Shoulder Press (Light)", sets: "3", reps: "15", note: "" },
    ],
    core: true,
    coreNote: "Core Focus (12–15 min)",
    coreExercises: [
      { name: "Side Plank", sets: "3", reps: "30 sec each" },
      { name: "Bird Dog", sets: "3", reps: "12 each side" },
      { name: "Pallof Press", sets: "3", reps: "12 each" },
      { name: "V-Sit Hold / Boat Pose", sets: "3", reps: "20–30 sec" },
      { name: "Hip Bridges / Glute Bridge", sets: "3", reps: "20" },
    ],
    tip: "Friday is about moving well, not hard. You're building the foundation for next week's squash.",
  },
  {
    day: "Saturday",
    label: "SAT",
    type: "Rest / Active Recovery",
    tag: "REST",
    tagColor: "#64748b",
    intensity: "Low",
    focus: "Recovery, Mobility, Play",
    cardio: "Optional 20–30 min walk — purely for enjoyment",
    exercises: [
      { name: "Full-Body Stretch Routine", sets: "1", reps: "15–20 min", note: "Focus on hips, thoracic spine, shoulders" },
      { name: "Foam Rolling", sets: "1", reps: "10 min", note: "Quads, IT band, lats" },
      { name: "Light Yoga / Breathwork", sets: "1", reps: "Optional", note: "" },
    ],
    core: false,
    coreNote: null,
    tip: "This day sets you up for Monday's squash. Don't skip the hip flexor and thoracic work.",
  },
  {
    day: "Sunday",
    label: "SUN",
    type: "Full Rest",
    tag: "REST",
    tagColor: "#64748b",
    intensity: "Off",
    focus: "Complete Rest",
    cardio: "No structured cardio",
    exercises: [
      { name: "Dog walk / nature walk", sets: "1", reps: "As long as you like", note: "Not counted as training" },
    ],
    core: false,
    coreNote: null,
    tip: "Rest is where gains are made. Faith, family, food — full recovery.",
  },
];

const intensityColor = {
  "High": "#ef4444",
  "Moderate–High": "#f97316",
  "Moderate": "#eab308",
  "Low–Moderate": "#22c55e",
  "Low": "#10b981",
  "Off": "#64748b",
};

export default function WorkoutRoutine() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSection, setExpandedSection] = useState("exercises");

  const current = days[activeDay];

  return (
    <div className="workout-container" style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e8e4dc",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      padding: "0",
      overflowX: "hidden",
    }}>
      {/* Header */}
      <div className="workout-header" style={{
        borderBottom: "1px solid #1e1e2e",
        background: "linear-gradient(180deg, #0f0f1a 0%, #0a0a0f 100%)",
      }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#6b6b8a", textTransform: "uppercase", marginBottom: "6px", fontFamily: "monospace" }}>
          SUSTAINABLE 5-DAY SPLIT
        </div>
        <h1 style={{
          fontSize: "clamp(26px, 4vw, 38px)",
          fontWeight: "300",
          margin: 0,
          letterSpacing: "-0.02em",
          color: "#e8e4dc",
          lineHeight: 1.1,
        }}>
          Training Programme
        </h1>
        <p style={{ fontSize: "13px", color: "#6b6b8a", margin: "8px 0 0", fontFamily: "monospace", letterSpacing: "0.05em" }}>
          Strength · Cardio · Core · Squash
        </p>
      </div>

      {/* Day Selector */}
      <div className="day-selector" style={{
        display: "flex",
        overflowX: "auto",
        gap: "2px",
        scrollbarWidth: "none",
      }}>
        {days.map((d, i) => (
          <button
            key={i}
            onClick={() => setActiveDay(i)}
            style={{
              flex: "0 0 auto",
              padding: "12px 16px",
              background: activeDay === i ? "#e8e4dc" : "transparent",
              color: activeDay === i ? "#0a0a0f" : "#6b6b8a",
              border: activeDay === i ? "none" : "1px solid #1e1e2e",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "11px",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              fontWeight: activeDay === i ? "700" : "400",
              transition: "all 0.2s ease",
              minWidth: "52px",
              textAlign: "center",
            }}
          >
            <div>{d.label}</div>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Day Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "24px",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <span style={{
                background: current.tagColor + "22",
                color: current.tagColor,
                padding: "3px 10px",
                borderRadius: "4px",
                fontSize: "10px",
                fontFamily: "monospace",
                letterSpacing: "0.15em",
                fontWeight: "600",
                border: `1px solid ${current.tagColor}44`,
              }}>{current.tag}</span>
              <span style={{
                background: intensityColor[current.intensity] + "22",
                color: intensityColor[current.intensity],
                padding: "3px 10px",
                borderRadius: "4px",
                fontSize: "10px",
                fontFamily: "monospace",
                letterSpacing: "0.15em",
                border: `1px solid ${intensityColor[current.intensity]}44`,
              }}>{current.intensity}</span>
            </div>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: "300", margin: "0 0 4px", letterSpacing: "-0.01em" }}>
              {current.day}
            </h2>
            <p style={{ margin: 0, color: "#9d9db8", fontSize: "14px", fontFamily: "monospace" }}>{current.type}</p>
          </div>
        </div>

        {/* Cardio Banner */}
        <div style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)",
          border: "1px solid #2a2a44",
          borderLeft: "3px solid #6366f1",
          borderRadius: "8px",
          padding: "14px 18px",
          marginBottom: "20px",
          display: "flex",
          gap: "12px",
          alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>🚶</span>
          <div>
            <div style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.2em", color: "#6366f1", marginBottom: "4px" }}>CARDIO</div>
            <p style={{ margin: 0, fontSize: "13px", color: "#c4c4e0", lineHeight: 1.5 }}>{current.cardio}</p>
          </div>
        </div>

        {/* Section Tabs */}
        <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
          {["exercises", ...(current.core ? ["core"] : []), "notes"].map(section => (
            <button
              key={section}
              onClick={() => setExpandedSection(section)}
              style={{
                padding: "8px 16px",
                background: expandedSection === section ? "#1e1e2e" : "transparent",
                color: expandedSection === section ? "#e8e4dc" : "#6b6b8a",
                border: "1px solid",
                borderColor: expandedSection === section ? "#3a3a5e" : "transparent",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "11px",
                fontFamily: "monospace",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.15s",
              }}
            >
              {section === "core" ? current.coreNote || "Core" : section}
            </button>
          ))}
        </div>

        {/* Exercises */}
        {expandedSection === "exercises" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {current.exercises.map((ex, i) => (
              <div key={i} className="exercise-card" style={{
                background: "#0f0f1a",
                border: "1px solid #1e1e2e",
                borderRadius: "8px",
                padding: "14px 18px",
              }}>
                <div style={{ flex: 1, minWidth: "160px" }}>
                  <div style={{ fontSize: "14px", color: "#e8e4dc", marginBottom: ex.note ? "4px" : 0 }}>{ex.name}</div>
                  {ex.note && <div style={{ fontSize: "11px", color: "#6b6b8a", fontFamily: "monospace" }}>{ex.note}</div>}
                </div>
                <div className="exercise-stats">
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "16px", fontWeight: "300", color: "#6366f1" }}>{ex.sets}</div>
                    <div style={{ fontSize: "9px", color: "#6b6b8a", fontFamily: "monospace", letterSpacing: "0.1em" }}>SETS</div>
                  </div>
                  <div style={{ width: "1px", background: "#1e1e2e" }} />
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "16px", fontWeight: "300", color: "#a78bfa" }}>{ex.reps}</div>
                    <div style={{ fontSize: "9px", color: "#6b6b8a", fontFamily: "monospace", letterSpacing: "0.1em" }}>REPS</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Core */}
        {expandedSection === "core" && current.core && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{
              background: "#120d1f",
              border: "1px solid #3b2a6e",
              borderRadius: "8px",
              padding: "14px 18px",
              marginBottom: "8px",
            }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#9d8fc4", fontFamily: "monospace", lineHeight: 1.6 }}>
                Core work is done <strong style={{ color: "#a78bfa" }}>after</strong> your main session. These movements target anti-rotation, stability, and squash-specific oblique strength.
              </p>
            </div>
            {current.coreExercises.map((ex, i) => (
              <div key={i} className="exercise-card" style={{
                background: "#0f0f1a",
                border: "1px solid #2a1f44",
                borderRadius: "8px",
                padding: "14px 18px",
              }}>
                <div style={{ fontSize: "14px", color: "#e8e4dc", flex: 1 }}>{ex.name}</div>
                <div className="exercise-stats">
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "16px", fontWeight: "300", color: "#8b5cf6" }}>{ex.sets}</div>
                    <div style={{ fontSize: "9px", color: "#6b6b8a", fontFamily: "monospace", letterSpacing: "0.1em" }}>SETS</div>
                  </div>
                  <div style={{ width: "1px", background: "#1e1e2e" }} />
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "16px", fontWeight: "300", color: "#a78bfa" }}>{ex.reps}</div>
                    <div style={{ fontSize: "9px", color: "#6b6b8a", fontFamily: "monospace", letterSpacing: "0.1em" }}>REPS / HOLD</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Notes */}
        {expandedSection === "notes" && (
          <div style={{
            background: "linear-gradient(135deg, #0f1a0f 0%, #0a100a 100%)",
            border: "1px solid #1a3a1a",
            borderLeft: "3px solid #10b981",
            borderRadius: "8px",
            padding: "20px 22px",
          }}>
            <div style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.2em", color: "#10b981", marginBottom: "10px" }}>COACH'S NOTE</div>
            <p style={{ margin: 0, fontSize: "14px", color: "#c4e0c4", lineHeight: 1.7 }}>{current.tip}</p>
          </div>
        )}

        {/* Weekly Overview */}
        <div style={{
          marginTop: "40px",
          paddingTop: "32px",
          borderTop: "1px solid #1e1e2e",
        }}>
          <div style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.2em", color: "#6b6b8a", marginBottom: "16px" }}>WEEKLY OVERVIEW</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {days.map((d, i) => (
              <div
                key={i}
                onClick={() => { setActiveDay(i); setExpandedSection("exercises"); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "10px 14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  background: activeDay === i ? "#1e1e2e" : "transparent",
                  border: `1px solid ${activeDay === i ? "#3a3a5e" : "transparent"}`,
                  transition: "all 0.15s",
                }}
              >
                <span style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  color: activeDay === i ? "#e8e4dc" : "#6b6b8a",
                  letterSpacing: "0.1em",
                  minWidth: "30px",
                }}>{d.label}</span>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: d.tagColor,
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: "13px", color: activeDay === i ? "#e8e4dc" : "#9d9db8" }}>{d.type}</span>
                <span style={{
                  marginLeft: "auto",
                  fontSize: "10px",
                  fontFamily: "monospace",
                  color: intensityColor[d.intensity],
                  letterSpacing: "0.1em",
                }}>{d.intensity}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: "40px" }} />
      </div>
    </div>
  );
}
