import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState(null);

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };
    localStorage.setItem('reactSystemInfo', JSON.stringify(info));
    setSysInfo(JSON.parse(localStorage.getItem('reactSystemInfo')));
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 text-center p-6 text-sm mt-12 border-t border-slate-800">
      <p className="hover:text-emerald-400 transition-colors">
        &copy; 2026 Поліна Гага. Усі права захищено.
      </p>
      {sysInfo && (
        <div className="mt-3 text-xs text-slate-500 space-y-1">
          <p>Платформа: {sysInfo.platform}</p>
          <p>Браузер: {sysInfo.userAgent}</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;