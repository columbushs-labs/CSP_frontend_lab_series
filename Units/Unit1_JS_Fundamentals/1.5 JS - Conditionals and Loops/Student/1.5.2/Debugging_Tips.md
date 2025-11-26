# Debugging Tips 🛠️

- If nothing prints, did you add the `<script>` tag for the right file?
- Use `console.log("check:", value)` to inspect variables.
- If your loop never stops, check your **condition** and **updates** (`i++`, `n--`).
- `NaN` means "Not a Number": verify with `Number.isNaN(value)`.
- Watch out for **off-by-one**: should your loop go to `<` or `<=`?
