 const troubleshootIssues={
    "Hardware Issues":{
        "PC Won't Turn ON":{
            "Check Power Connections":[
                "Ensure that the power cable is securely plugged into both the PC and the power outlet",
                "If using a power strip or surge protector, make sure it is turned on and functioning properly.",
                "Try plugging the PC into a different power outlet to rule out a problem with the current outlet."
            ],
            "Inspect Power Supply Unit (PSU)":[
                "Check if the power supply unit (PSU) switch is turned on (if applicable). It's usually located at the back of the PC near where the power cable is connected.",
                "Listen for any unusual noises coming from the PSU when attempting to turn on the PC. A clicking or buzzing sound could indicate a faulty PSU.",
                "If possible, test the PSU using a multimeter to determine if it's providing the correct voltage output."
            ],
            "Check Internal Connections":[
                "Open the PC case and inspect the internal connections, including the motherboard, CPU, RAM, and power connectors.",
                "Ensure that all cables and components are securely seated in their respective sockets.",
                "If any components appear loose or disconnected, reseat them carefully."
            ],
            "Test with Minimal Hardware":[
                "If possible, try using a different power supply unit to test if the issue is related to the PSU.",
                "Borrow a power supply unit from another PC or use a spare if available.",
                "If the PC powers on with a different PSU, it indicates that the original PSU may be faulty and needs to be replaced."
            ]
        },
        "No Display on Monitor":{
            "Check Monitor Connections":[
                "Ensure that the monitor's power cable is securely plugged into a working power outlet.",
                "Verify that the monitor's video cable (VGA, DVI, HDMI, DisplayPort) is securely connected to both the monitor and the computer's video output port."
            ],
            "Verify Monitor Power and Input Source":[
                "Check if the monitor is powered on. Look for a power indicator light on the monitor.",
                "Use the monitor's on-screen display (OSD) menu or buttons to cycle through input sources to ensure the correct source is selected (e.g., VGA, HDMI, DisplayPort)."
            ],
            "Inspect Video Cable and Connectors":[
                "Examine the video cable for any signs of damage such as bent pins or frayed wires.",
                "If using an adapter or converter, ensure that it is compatible with both the monitor and the computer's video output port."
            ],
            "Test with Different Cable or Port":[
                "If possible, try using a different video cable or a different video output port on the computer.",
                "For desktop computers, try connecting the monitor to a different video output port on the graphics card (if available) or directly to the motherboard's integrated graphics port."
            ],
            "Restart the Computer":[
                "Sometimes, a simple restart of the computer can resolve display issues caused by software glitches or driver conflicts.",
                "Press the restart button on the computer case or use the keyboard shortcut (Ctrl + Alt + Del) to restart the computer."
            ],
            "Check Graphics Card and Drivers":[
                "If using a dedicated graphics card, ensure that it is properly seated in its PCIe slot on the motherboard.",
                "Update the graphics card drivers to the latest version available from the manufacturer's website.",
                "If the computer has integrated graphics, ensure that the integrated graphics are enabled in the BIOS settings."

            ],
            "Test with Different Monitor":[
                "If possible, connect the computer to a different monitor to see if the issue persists.",
                "If the alternate monitor displays a picture, it indicates that the original monitor may be faulty and needs to be replaced."
            ],
            "Check for Hardware Failures":[
                "If none of the above steps resolve the issue, it could indicate a hardware failure with the monitor, graphics card, or other components.",
                "Consider seeking professional assistance for further diagnosis and repair."
            ]
        },
        "Overheating":{
            "Clean Dust and Debris":[
                "Dust buildup inside the PC case can obstruct airflow and cause components to overheat. Use compressed air or a soft brush to carefully clean dust from the fans, heatsinks, and vents."
            ],
            "Improve Airflow":[
                "Ensure that the PC case has adequate airflow by arranging cables neatly and avoiding clutter. Consider installing additional case fans or upgrading to a case with better ventilation"
            ],
            "Monitor Temperatures":[
                "Use software utilities like HWMonitor, SpeedFan, or the manufacturer's monitoring software to monitor the temperatures of key components such as the CPU and GPU. Keep an eye on temperatures to identify potential overheating issues"
            ],
            "Replace or Upgrade Cooling Components":[
                "Consider upgrading the CPU cooler or adding aftermarket cooling solutions such as liquid cooling systems or larger heatsinks to better dissipate heat.",
                "Ensure that thermal paste between the CPU and heatsink is applied correctly and not dried out. Replace the thermal paste if necessary."
            ],
            "Check Fan Operation":[
                "Ensure that all fans, including CPU, GPU, and case fans, are functioning properly. Replace any malfunctioning fans promptly.",
                "Adjust fan speeds in the BIOS settings or using third-party software to ensure optimal cooling performance."
            ],
            "Improve Ambient Temperature":[
                "Ensure that the room where the PC is located is adequately ventilated and not excessively hot. Avoid placing the PC near heat sources such as radiators or direct sunlight."
            ],
            "Manage Software and Workloads":[
                "Close unnecessary background programs and processes that may be causing the CPU or GPU to work harder than necessary.",
                "Avoid running demanding tasks for extended periods in poorly ventilated environments. Take breaks to allow the PC to cool down."
            ],
            "Check for Hardware Faults":[
                "Check for faulty hardware components such as malfunctioning fans, failing power supplies, or inadequate thermal design.",
                " Ensure that all components are properly seated and connected, and that there are no loose connections."
            ],
            "Update BIOS and Drivers":[
                "Ensure that the motherboard BIOS and device drivers are up-to-date. Manufacturers often release updates that improve system stability and thermal management."
            ]
        }
    },
    "Software Issues":{
        "PC Running Slow":{
            "Check for Malware and Viruses":[
                "Perform a full system scan using reputable antivirus software to check for malware, viruses, and other malicious programs that may be slowing down your PC. Remove any detected threats."
            ],
            "Free Up Disk Space":[
                "Delete unnecessary files and programs to free up disk space on your hard drive or SSD. Use built-in disk cleanup tools or third-party software to identify and remove temporary files, cached data, and other clutter."
            ],
            "Disable Startup Programs":[
                "Disable unnecessary programs from starting up automatically with Windows. Use the Task Manager or System Configuration utility (msconfig) to manage startup programs and services. This can help improve boot times and reduce system resource usage."
            ],
            "Update Operating System and Drivers":[
                "Ensure that your operating system (e.g., Windows, macOS, Linux) and device drivers are up-to-date. Manufacturers release updates that include performance improvements, bug fixes, and security patches."
            ],
            "Increase RAM":[
                "If your PC is low on RAM (random access memory), consider upgrading to a higher capacity. More RAM allows your PC to handle multiple tasks simultaneously without slowing down due to memory constraints."
            ],
            "Optimize Settings and Visual Effects":[
                "Adjust visual effects settings in Windows to optimize performance. Disable or reduce the intensity of visual effects such as animations, transparency, and shadows.",
                "Set your PC to the 'Best Performance' mode in the Power Options settings to prioritize performance over energy savings."
            ],
            "Defragment Hard Drive (if applicable)":[
                "If you're using a traditional hard drive (HDD), defragment the drive to improve read and write speeds. Windows includes a built-in Disk Defragmenter tool that can help optimize disk performance."
            ],
            "Check for Hardware Upgrades":[
                "Consider upgrading hardware components such as the CPU, GPU, or storage drive (e.g., upgrading to an SSD for faster performance). However, ensure compatibility and feasibility before making any hardware upgrades."
            ],
            "Perform a Clean Installation of the Operating System":[
                "As a last resort, consider performing a clean installation of the operating system to remove any accumulated software bloat, corruption, or performance-degrading issues. Remember to back up your important files before proceeding."
            ],
            "Seek Professional Assistance":[
                "If you're unable to resolve the slow performance issue on your own, consider seeking assistance from a professional technician or computer repair service. They can diagnose underlying issues and recommend appropriate solutions."
            ]
        },
        "Software Crashes":{
            "Update Software":[
                "Ensure that all software applications, including the operating system, are up-to-date with the latest patches and updates. Manufacturers often release updates to fix bugs and improve stability."
            ],
            "Check System Requirements":[
                "Verify that your PC meets the minimum system requirements for the software you're using. Inadequate hardware specifications can cause software crashes and performance issues."
            ],
           "Close Background Programs":[
            "Close unnecessary background programs and processes that may be conflicting with the software or consuming system resources. Use Task Manager (Ctrl + Shift + Esc) to identify and close resource-intensive programs."
           ] ,
           "Run Software in Compatibility Mode":[
            "If you're experiencing compatibility issues with older software on a newer operating system, try running the software in compatibility mode. Right-click on the software executable, select Properties, go to the Compatibility tab, and choose an appropriate compatibility mode."
           ],
           "Update Device Drivers":[
            "Ensure that device drivers, especially graphics card drivers, are up-to-date. Outdated or faulty drivers can cause software crashes and compatibility issues. Use Device Manager or manufacturer websites to update drivers."
           ],
           "Check for Conflicting Software":[
            "Identify if any recently installed software or drivers are causing conflicts with the software that's crashing. Uninstall or disable any recently installed programs and observe if the issue persists."
           ],
           "Scan for Malware":[
            "Perform a thorough scan for malware and viruses using reputable antivirus software. Malware infections can cause software instability and crashes. Remove any detected threats and ensure real-time protection is enabled"
           ],
           "Repair or Reinstall Software":[
            "Repair the installation of the software experiencing crashes using the built-in repair feature (if available). Alternatively, uninstall and reinstall the software to ensure a fresh installation and fix any corrupted files or settings."
           ],
           "Check Event Viewer Logs":[
            "Use the Event Viewer tool in Windows to view detailed logs of software crashes and error messages. Analyzing these logs can help identify the root cause of the crashes and guide troubleshooting efforts."
           ],
           "Seek Software Support":[
            "If the software crashes persist despite troubleshooting efforts, contact the software manufacturer's support team for assistance. They may provide specific troubleshooting steps or patches to address the issue."
           ]
        },
        "Blue Screen of Death (BSOD)":{
            "Note Down Error Message":[
                "When encountering a BSOD, take note of the error message displayed on the screen. This message usually contains a specific error code or description that can help diagnose the underlying cause of the issue."
            ],
            "Restart the Computer":[
                "In most cases, the computer will automatically restart after a BSOD. Allow the computer to restart, as this may resolve the issue temporarily."
            ],
            "Check for Overheating ":[
                "Overheating can cause BSODs. Check if the computer's cooling system (fans, heatsinks) is functioning properly and ensure proper airflow within the case. Clean any dust buildup and monitor temperatures using software utilities."
            ],
            "Update Device Drivers":[
                "Outdated or faulty device drivers can trigger BSODs. Update drivers for your graphics card, network adapter, chipset, and other hardware components from the manufacturer's website or using Windows Update."
            ]
        },
        "Scan for Malware":[
            "Perform a thorough scan for malware and viruses using reputable antivirus software. Malware infections can cause system instability and BSODs. Remove any detected threats and enable real-time protection."
        ],
        "Check Hardware Components":[
            "Faulty hardware components such as RAM, hard drives, or the CPU can cause BSODs. Run hardware diagnostic tests to check for hardware issues. Remove and reseat hardware components, or replace them if necessary."
        ],
        "Update BIOS/UEFI Firmware":[
            "Ensure that the motherboard's BIOS or UEFI firmware is up-to-date. Manufacturers often release updates to address compatibility issues and improve system stability"
        ],
        "Check for Software Conflicts":[
            "Identify if any recently installed software or updates are causing conflicts with the operating system. Uninstall recent software or updates, or perform a system restore to a point before the issue occurred."
        ],
        "Use Windows Troubleshooters":[
            "Windows includes built-in troubleshooters that can help diagnose and fix common issues, including BSODs. Run the BSOD troubleshooter and follow any recommended steps to resolve the problem."
        ],
        "Seek Professional Assistance":[
            "If BSODs persist despite troubleshooting efforts, consider seeking assistance from a professional technician or computer repair service. They can perform advanced diagnostics and repairs to identify and fix the underlying cause of the issue"
        ]

    },
    "Internet Connectivity Issues":{
        "No Internet Connection":{
            "Check Network Connections":[
                "Verify that all network cables (Ethernet, coaxial) are securely connected to both the modem/router and the computer or router",
                "If using Wi-Fi, ensure that the Wi-Fi adapter is enabled on the computer and connected to the correct network."
            ],
            "Restart Networking Devices":[
                "Power cycle the modem and router by unplugging them from the power source, waiting for 30 seconds, and then plugging them back in.",
                "Allow the devices to reboot and establish a connection. Test if the internet connection is restored."
            ],
            "Check Network Status Lights":[
                "Inspect the lights on the modem and router to determine if there are any connectivity issues. Look for indicators such as power, DSL, internet, or Wi-Fi lights.",
                "Consult the device's user manual or manufacturer's website for information on what each light signifies."
            ],
            "Reset Network Settings":[
                "Reset network settings on the computer or router to default. This can help resolve configuration issues that may be causing the no internet connection problem.",
                "On Windows, you can reset network settings by going to Settings > Network & Internet > Network reset.",
                "On routers, there is typically a reset button that can be pressed using a paperclip or similar tool."
            ],
            "Update Network Drivers":[
                "Ensure that network adapter drivers on the computer are up-to-date. Outdated or corrupted drivers can cause connectivity issues.",
                "Use Device Manager to update network drivers or download the latest drivers from the manufacturer's website."
            ],
            "Check Firewall and Security Software":[
                "Temporarily disable firewall and security software to determine if they are blocking internet access. If the connection works after disabling the software, adjust the settings to allow internet access.",
                "Be cautious when disabling security software and re-enable it once the issue is resolved."
            ],
            "Run Network Troubleshooter":[
                "Use built-in network troubleshooters available in the operating system to diagnose and fix common network issues.",
                "On Windows, you can access the Network troubleshooter by going to Settings > Network & Internet > Network troubleshooter."
            ],
            "Contact Internet Service Provider (ISP)":[
                "If the issue persists after trying the above steps, contact your ISP for further assistance. There may be an outage in your area or a problem with your internet service that requires their attention."
            ]
        },
        "Slow Internet Speed":{
            "Check Internet Speed":[
                "Use online speed testing tools like Ookla Speedtest, Fast.com, or Google's Speed Test to measure your internet speed. Compare the results with your subscribed internet plan to identify if the speed is significantly lower than expected"
            ],
           "Restart Modem and Router":[
            "Power cycle the modem and router by unplugging them from the power source, waiting for 30 seconds, and then plugging them back in. Allow the devices to reboot and establish a connection. This can often resolve temporary connectivity issues."
           ] ,
           "Move Closer to the Router":[
            "If using Wi-Fi, move closer to the router to improve signal strength. Walls, floors, and other obstacles can weaken Wi-Fi signals, leading to slower speeds. Consider relocating the router to a more central location in your hom"
           ],
           "Reduce Interference":[
            "Minimize interference from other electronic devices that operate on the same frequency as Wi-Fi (e.g., microwave ovens, cordless phones). Position the router away from such devices and use the 5 GHz band for Wi-Fi if available"
           ],
           "Update Router Firmware":[
            "Ensure that the router firmware is up-to-date. Manufacturers often release firmware updates that include performance improvements and bug fixes. Check the router manufacturer's website for firmware updates and follow the instructions to install them."
           ],
           "Optimize Wi-Fi Settings":[
            "Configure the router's Wi-Fi settings for optimal performance. This may include selecting the appropriate Wi-Fi channel, enabling Quality of Service (QoS) settings to prioritize certain types of traffic, and adjusting the Wi-Fi transmit power"
           ],
           "Use Wired Connection":[
            "If possible, use a wired Ethernet connection instead of Wi-Fi to eliminate wireless interference and potential signal degradation. Connect the computer directly to the router using an Ethernet cable for faster and more reliable speeds."
           ],
           "Check for Bandwidth-Hogging Applications":[
            "Identify and close any bandwidth-hogging applications or background processes that may be consuming internet bandwidth. This includes file-sharing programs, streaming services, and software updates running in the background"
           ],
           "Reset Internet Settings":[
            "Reset network settings on your computer or device to default. This can help resolve configuration issues that may be affecting internet speed. Go to Network settings and select the option to reset network settings."
           ],
           "Contact Internet Service Provider (ISP)":[
            "If the issue persists after trying the above steps, contact your ISP for further assistance. There may be congestion on the network, line issues, or other factors affecting internet speed that require their attention"
           ]
        },
        "Limited Connectivity":{
            "Restart Modem and Router":[
                "Power cycle the modem and router by unplugging them from the power source, waiting for 30 seconds, and then plugging them back in. Allow the devices to reboot and establish a connection. This can often resolve temporary connectivity issues."
            ],
            "Check Network Settings":[
                "Verify that the network settings on your computer or device are configured correctly. Ensure that the correct network name (SSID) and password are entered for Wi-Fi connections. For wired connections, check that the Ethernet cable is securely connected"
            ],
            "Forget and Reconnect to Wi-Fi Network":[
                "If using Wi-Fi, forget the network on your device and then reconnect to it. This can sometimes resolve authentication or configuration issues causing limited connectivity.",
                "On Windows, go to Settings > Network & Internet > Wi-Fi, select the network, and click 'Forget.' Then reconnect to the network and enter the password if prompted"
            ],
            "Check for IP Address Conflict":[
                "Ensure that there are no IP address conflicts on the network. Two devices with the same IP address can cause limited connectivity issues. Configure devices to obtain IP addresses automatically (DHCP) or assign static IP addresses carefully"
            ],
            "Update Network Drivers":[
                "Ensure that network adapter drivers on the computer or device are up-to-date. Outdated or corrupted drivers can cause connectivity issues. Use Device Manager to update network drivers or download the latest drivers from the manufacturer's website."
            ],
            "Reset TCP/IP Stack":[
                "Reset the Transmission Control Protocol/Internet Protocol (TCP/IP) stack on your computer. Open Command Prompt as an administrator and type the following commands one by one",
                "Restart your computer after running these commands to apply the changes."
            ],
            "Disable and Enable Network Adapter":[
                "Disable the network adapter on your computer or device, wait for a few seconds, and then re-enable it. This can refresh the network connection and resolve limited connectivity issues",
                "Right-click on the network icon in the system tray, select 'Open Network & Internet settings, click on Change adapter options, right-click on the network adapter, and choose Disable. Repeat the process to enable it"
            ],
            "Check Firewall and Security Software":[
                "Temporarily disable firewall and security software to determine if they are blocking internet access. If the connection works after disabling the software, adjust the settings to allow internet access. Be cautious when disabling security software and re-enable it once the issue is resolved."
            ],
            "Contact Internet Service Provider (ISP)":[
                "If the issue persists after trying the above steps, contact your ISP for further assistance. There may be issues with the internet service or network infrastructure that require their attention"
            ]

        }
    },
    "Performance Issues":{
    "Low Frame Rates in Games":{
            "Lower Graphics Settings":[
                "Reduce graphics settings within the game to lower the demand on your hardware. This may include lowering resolution, disabling or reducing anti-aliasing, shadows, textures, and other graphics effects."
            ],
            "Update Graphics Drivers":[
                "Ensure that your graphics card drivers are up-to-date. Visit the website of your graphics card manufacturer (NVIDIA, AMD, Intel) to download and install the latest drivers. Updated drivers often include performance optimizations for newer games"
            ],
            "Optimize In-Game Settings":[
                "Some games offer built-in optimization tools or presets that adjust graphics settings based on your hardware. Use these options to optimize settings for better performance."
            ],
            "Monitor Background Processes":[
                "Close background programs and processes that may be consuming system resources, such as web browsers, streaming services, or software updates. Use Task Manager (Ctrl + Shift + Esc) to identify and close unnecessary processes."
            ],
            "Check System Requirements":[
                "Ensure that your PC meets the minimum system requirements for the game you're playing. Insufficient hardware specifications can lead to low frame rates and poor performance"
            ],
            "Monitor CPU and GPU Temperatures":[
                "Monitor CPU and GPU temperatures using software utilities like HWMonitor or MSI Afterburner. High temperatures can lead to throttling and decreased performance. Ensure proper cooling and airflow within your PC case"
            ],
            "Overclock Graphics Card (Advanced Users)":[
                "If you're comfortable with overclocking, consider overclocking your graphics card to increase performance. Be cautious and ensure proper cooling to avoid overheating and stability issues"
            ],

            "Disable V-Sync and Motion Blur":[
                "Disable vertical synchronization (V-Sync) and motion blur effects within the game settings. V-Sync can introduce input lag and limit frame rates, while motion blur can reduce visual clarity."
            ],
            "Clean Dust and Debris":[
              "Clean dust and debris from your PC's hardware components, including the CPU and GPU heatsinks, fans, and case vents. Dust buildup can impede airflow and cause overheating, leading to reduced performance"  
            ],
            "Upgrade Hardware Components":[
                "If performance is consistently poor despite optimizing settings, consider upgrading hardware components such as the CPU, GPU, or RAM to improve gaming performance. Evaluate your budget and priorities before making hardware upgrades"
            ]

        },
    "Slow Application Loading Times":{
        "Check System Resources":[
            "Monitor system resources (CPU, RAM, disk usage) using Task Manager (Ctrl + Shift + Esc on Windows, Activity Monitor on macOS) to identify if resource usage is high. Close unnecessary programs and background processes to free up resources."
        ],
        "Update Software":[
            "Ensure that the application and its dependencies are up-to-date. Check for updates within the application or visit the developer's website to download the latest version. Updates often include performance improvements and bug fixes"
        ],
        "Optimize Startup Programs":[
            "Disable unnecessary programs from starting up automatically with Windows/macOS. Use Task Manager (Windows) or System Preferences > Users & Groups > Login Items (macOS) to manage startup programs and services"
        ],
        "Check for Disk Fragmentation":[
            "If using a traditional hard drive (HDD), defragment the drive to improve read and write speeds. On Windows, use the built-in Disk Defragmenter tool. On macOS, use the built-in Disk Utility tool to repair disk permissions."
        ],
        "Optimize Storage Drive":[
            "Ensure that your storage drive (HDD or SSD) has sufficient free space available. Remove unnecessary files and programs to free up space. Consider upgrading to an SSD for faster application loading times."
        ],
        "Close Background Programs":[
            "Close unnecessary programs and background processes that may be consuming system resources. Use Task Manager or Activity Monitor to identify and close resource-intensive programs"
        ],
        "Check for Malware":[
            "Perform a full system scan for malware and viruses using reputable antivirus software. Malware infections can cause system slowdowns and affect application performance. Remove any detected threats and enable real-time protection."
        ],
        "Update Hardware Drivers":[
            "Ensure that hardware drivers, including graphics card, chipset, and storage drivers, are up-to-date. Visit the manufacturer's website to download and install the latest drivers. Updated drivers can improve compatibility and performance"
        ],
        "Adjust Virtual Memory/Pagefile Settings":[
            "Adjust virtual memory (pagefile) settings to improve system performance. On Windows, go to Control Panel > System > Advanced system settings > Performance > Settings > Advanced > Virtual memory. Ensure that Automatically manage paging file size for all drives is enabled, or manually adjust the virtual memory size"
        ],
        "Upgrade Hardware Components":[
            "If performance is consistently poor despite optimization efforts, consider upgrading hardware components such as the CPU, RAM, or storage drive to improve application loading times. Evaluate your budget and priorities before making hardware upgrades"
        ]
        },
    "High CPU Usage":{
            "Identify the Culprit Process":[
                "Use Task Manager (Ctrl + Shift + Esc) on Windows or Activity Monitor on macOS to identify which processes are consuming the most CPU resources. Sort processes by CPU usage to identify the culprit"
            ],
            "Close Resource-Intensive Programs":[
                "Close unnecessary programs and background processes that are consuming high CPU resources. Identify and close programs that you're not actively using to free up CPU resources for other tasks"
            ],
            "Update Software":[
                "Ensure that your operating system and software applications are up-to-date with the latest patches and updates. Developers often release updates to optimize performance and fix bugs that may contribute to high CPU usage"
            ],
            "Check for Malware":[
                "Perform a full system scan for malware and viruses using reputable antivirus software. Malware infections can cause high CPU usage and affect system performance. Remove any detected threats and enable real-time protection"
            ],
            "Limit Startup Programs":[
                "Disable unnecessary programs from starting up automatically with Windows or macOS. Use Task Manager (Windows) or System Preferences > Users & Groups > Login Items (macOS) to manage startup programs and service"
            ],
            "Adjust Power Options":[
                "On laptops and desktops, adjust power options to prioritize performance over energy savings. In Windows, go to Control Panel > Power Options and select the High Performance power plan. On macOS, adjust Energy Saver settings to favor performance."
            ],
            "Update Hardware Drivers":[
                "Ensure that hardware drivers, including graphics card, chipset, and network drivers, are up-to-date. Visit the manufacturer's website to download and install the latest drivers. Updated drivers can improve compatibility and performance."
            ],
            "Check for Background Tasks":[
                "Monitor background tasks and scheduled processes that may be running and consuming CPU resources. Disable or reschedule non-essential background tasks using Task Scheduler (Windows) or launchd (macOS)"
            ],
           "Reduce Browser Extensions":[
            "If web browsers are causing high CPU usage, reduce the number of browser extensions and plugins installed. Some extensions can be resource-intensive and contribute to high CPU usage. Disable or remove unnecessary extensions."
           ] ,
           "Upgrade Hardware Components":[
            "If high CPU usage persists despite optimization efforts, consider upgrading hardware components such as the CPU, RAM, or storage drive to improve overall system performance. Evaluate your budget and priorities before making hardware upgrades"
           ]

        }
    },
    "Startup/Boot Issues":{
    "Boot Failure":{
            "Check Boot Device Order":[
                "Ensure that the boot order in the BIOS or UEFI settings is configured correctly. The system should attempt to boot from the primary boot device, usually the internal hard drive or SSD, where the operating system is installed"
            ],
            "Check Boot Device Connections":[
                "Verify that all cables connecting the boot device (hard drive or SSD) to the motherboard are securely connected. A loose or disconnected cable can prevent the system from booting properly"
            ],
            "Reset BIOS/UEFI Settings":[
                "Reset the BIOS or UEFI settings to default. This can help resolve configuration issues that may be preventing the system from booting. Refer to the motherboard manual for instructions on resetting the BIOS or UEFI settin"
            ],
            "Check for External Devices":[
                "Disconnect any external devices (USB drives, external hard drives, optical drives) from the computer. Sometimes, a connected external device may interfere with the boot process"
            ],
            "Perform Startup Repair (Windows)":[
                "If using Windows, boot into the Windows Recovery Environment and perform a startup repair. This tool can automatically fix common boot problems such as corrupted boot files or missing system files"
            ],
            "Use Bootable Recovery Media":[
                "Boot from a bootable recovery USB drive or DVD that contains diagnostic and repair tools. Many operating systems offer built-in recovery options that can help diagnose and repair boot-related issues"
            ],
            "Check for Hard Drive/SSD Failure":[
                "Test the health and integrity of the boot device (hard drive or SSD) using diagnostic tools provided by the drive manufacturer or third-party software. A failing or corrupted boot device can cause boot failure"
            ],

            "Reinstall Operating System":[
                "If all else fails and you suspect a software issue, consider reinstalling the operating system. Backup your important files before reinstalling the operating system to avoid data loss."
            ],
            "Seek Professional Assistance":[
               "If you're unable to resolve the boot failure issue on your own, consider seeking assistance from a professional technician or computer repair service. They can perform advanced diagnostics and repairs to identify and fix the underlying cause of the problem" 
            ],
            "Replace Hardware Components":[
                "In some cases, boot failure may be caused by a faulty hardware component such as the motherboard, CPU, RAM, or power supply. If other troubleshooting steps fail to resolve the issue, consider replacing hardware components as needed."
            ]
        },
    "Windows Startup Repair":{
            "Boot into Windows Recovery Environment":[
                "Start your computer and wait for the Windows logo to appear",
                "While the logo is displayed, immediately press and hold the power button until the computer shuts down forcibly. Repeat this process two more times.",
                "On the fourth boot, Windows should enter Automatic Repair mode. Alternatively, if you're unable to trigger Automatic Repair using the above method, you can boot from a Windows installation USB/DVD and select  your computer instead of installing Windows."
            ],
            "Choose Troubleshoot":[
                "In the Automatic Repair screen, select Advanced options."
            ],
            "Select Startup Repair":[
                "In the Advanced options menu, select Troubleshoot."
            ],
            "Choose Startup Repair":[
                "Select Startup Repair from the list of troubleshooting options."
            ],
            "Select Operating System":[
                "If prompted, select the target operating system you want to repair. In most cases, there will only be one option available"
            ],
            "Follow On-Screen Instructions":[
                "Windows will begin diagnosing and attempting to repair any issues preventing your computer from starting properly",
                "Follow the on-screen instructions and allow the process to complete. It may take some time depending on the severity of the issue and the speed of your system"
            ],
            "Restart Your Computer":[
                "After Startup Repair completes, restart your computer and see if the issue has been resolved."
            ],
            "Repeat if Necessary":[
                "If the problem persists after the first attempt, you can repeat the process a few times to ensure that any potential issues are properly addressed"
            ]
        },
    "Endless Reboot Loop":{
            "Enter Safe Mode":[
                "During the boot process, continuously press the F8 key (or Shift + F8 on some systems) to access the Advanced Boot Options menu.",
                "From the menu, select 'Safe Mode' or 'Safe Mode with Networking' to boot into Windows with minimal drivers and service"
            ],

            "Perform Startup Repair":[
                "Boot into the Windows Recovery Environment using a Windows installation USB/DVD or by triggering Automatic Repair (as described in the 'Windows Startup Repair' solution)",
                "Select 'Startup Repair' and follow the on-screen instructions to attempt repairs to the boot configuration"
            ],
            "Disable Automatic Restart":[
                "During the boot process, continuously press the F8 key (or Shift + F8 on some systems) to access the Advanced Boot Options menu.",
                "Select 'Disable automatic restart on system failure.' This will prevent Windows from automatically restarting, allowing you to view any error messages displayed on the screen."
            ],
            "Use System Restore":[
                "Boot into the Windows Recovery Environment as described earlier.",
                "Select 'System Restore' and choose a restore point created before the issue started. This will revert your system to a previous state when it was working correctly."
            ],
            "Check for Windows Updates":[
                "Boot into Safe Mode or use the Advanced Boot Options menu to access the Command Prompt",
                "Run the command sfc /scannow to scan and repair system files.",
                "Run the command chkdsk /f /r to check and repair disk errors.",
                "After performing these checks, restart your computer and check if the issue persists."
            ],
            "Check for Hardware Issues":[
                "If none of the above solutions work, the issue may be caused by hardware problems such as faulty RAM or a failing hard drive.",
                "Test your RAM using tools like MemTest86 or Windows Memory Diagnostic.",
                "Check your hard drive for errors using CHKDSK or third-party disk diagnostic tools."
            ],
            "Perform a Clean Installation of Windows":[
                "If all else fails and you're unable to resolve the issue, consider performing a clean installation of Windows",
                "Backup your important files before proceeding, as a clean installation will erase all data on your system drive"
            ]
        }
    },
    "UPS Issues":{
        "Power Failure":["Check the power cord connection, ensure the UPS is plugged into a working outlet, and test the outlet with another device. Verify that the UPS battery is properly connected and not depleted."],
        "Battery Not Charging":["Inspect the battery connections and ensure they are secure. Check for any visible damage to the battery. Test the UPS with a known good battery if available."],
        "Alarm Sounds":["Refer to the user manual for alarm codes. Common causes include overload, low battery, or a faulty battery. Reduce the connected load to within the UPS’s capacity and test again."],
        "Frequent Switching to Battery":[" Check for power quality issues such as voltage fluctuations or frequent brownouts. Use a surge protector or line conditioner to stabilize the power supply."]
    }
}
export default troubleshootIssues;